function payment(){
    var address = jQuery('.address').attr("data-address");
    console.log(address);
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