payment();

function payment(){
    var address = jQuery('.address').attr("data-address");
    $.ajax({
        url: address + "payment.php",
        type: 'POST',
        dataType: 'json',
        success: function (response){
            PagSeguroDirectPayment.setSessionId(response.id);
        },
        complete: function(response) {
            listPaymentMethods();
        }
    });
}

function listPaymentMethods(){
    PagSeguroDirectPayment.getPaymentMethods({
        amount: 500.00,
        success: function(response) {
            //console.log(response);
            $('.payment-methods').append("<div>Cartão de Crédito</div>");  // Título acima das bandeiras
            $.each(response.paymentMethods.CREDIT_CARD.options, function(i, obj){
                //$('.payment-methods').append("<span>"+ obj.name +"</span>"); //Só o nome dos cartões de crédito
                //$('.payment-methods').append("<span><img src='https://stc.pagseguro.uol.com.br" + obj.images.SMALL.path + "'>"+ obj.name +"</span>"); //Só o nome dos cartões de crédito e bandeiras
                $('.payment-methods').append("<span class='img-band'><img src='https://stc.pagseguro.uol.com.br" + obj.images.SMALL.path + "'></span>"); //Só as bandeiras dos cartões de crédito
            });

            $('.payment-methods').append("<div>Boleto</div>");  // Título acima do boleto
            $('.payment-methods').append("<span class='img-band'><img src='https://stc.pagseguro.uol.com.br" + response.paymentMethods.BOLETO.options.BOLETO.images.SMALL.path + "'></span>"); //Boleto

            $('.payment-methods').append("<div>Débito online</div>");  // Título acima das bandeiras
            $.each(response.paymentMethods.ONLINE_DEBIT.options, function(i, obj){
                $('.payment-methods').append("<span class='img-band'><img src='https://stc.pagseguro.uol.com.br" + obj.images.SMALL.path + "'></span>"); //Só as bandeiras dos cartões de crédito
            });
        },
        error: function(response) {
            // Callback para chamadas que falharam.
        },
        complete: function(response) {
            // Callback para todas chamadas.
        }
    });
}

$('#cardNum').on('keyup', function() { //Trocar esse código para não ser jquery - parei em 9:25
    var cardNum = $(this).val();
    var qntNum = cardNum.length;
    // Código funciona mas buga - acredito ser lag de att do site
    document.querySelector('#msg').textContent = "";

    if(qntNum === 6){
        PagSeguroDirectPayment.getBrand({
            cardBin: cardNum,
            success: function(response) {
                var imgBanner = response.brand.name;
                $('.card-banner').html("<img src='https://stc.pagseguro.uol.com.br/public/img/payment-methods-flags/42x20/"+ imgBanner +".png'>");
            },
            error: function(response) {
                // Código funciona mas buga - acredito ser lag de att do site
                document.querySelector('.card-banner').textContent = "";
                document.querySelector('#msg').textContent = "Cartão inválido";
            },
            complete: function(response) {
              //tratamento comum para todas chamadas
            }
        });
    }
});