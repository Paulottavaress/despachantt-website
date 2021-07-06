// Na aula do link abaixo eu fiz muitas alterações, já que o hash so seria recuperado ao clicar no label do full name
// https://www.youtube.com/watch?v=uQm8UStWLG8&list=PLmY5AEiqDWwD2mkvDEBS9Bqfk95ziKT02&index=8

var amount = "600.00";
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
        amount: amount,
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

document.getElementById('cardNum').addEventListener('change', function(e) { //Trocar esse código para não ser jquery - parei em 9:25
    var cardNum = document.getElementById('cardNum').value;
    var qntNum = cardNum.length;
    // Código funciona mas buga - acredito ser lag de att do site
    //document.querySelector('#msg').textContent = "";

    if(qntNum >= 6){
        PagSeguroDirectPayment.getBrand({
            cardBin: cardNum,
            success: function(response) {
                var imgBrand = response.brand.name;
                $('.card-banner').html("<img src='https://stc.pagseguro.uol.com.br/public/img/payment-methods-flags/42x20/"+ imgBrand +".png'>");
                $('#cardBrand').val(imgBrand);
                installments(imgBrand);
            },
            error: function(response) {
                // Código funciona mas buga - acredito ser lag de att do site
                //document.querySelector('.card-banner').textContent = "";
                // Código funciona mas buga - acredito ser lag de att do site
                //document.querySelector('#msg').textContent = "Cartão inválido";
            },
            complete: function(response) {
              //tratamento comum para todas chamadas
            }
        });
    }
});

// Retrieve the amount of installments and the value of the installments
function installments(imgBrand) {
    PagSeguroDirectPayment.getInstallments({
        amount: amount,
        maxInstallmentNoInterest: 3,
        brand: imgBrand,
        success: function(response){
            $.each(response.installments, function(ia, obja){
                $.each(obja, function(ib, objb){
                    var installmentValue = objb.installmentAmount.toFixed(2).replace(".", ",");
                    $('#qntInstallments').show().append("<option value='" + objb.quantity + "' installments-date='" + objb.installmentAmount + "'>" + objb.quantity + " parcelas de R$ " + installmentValue +"</option>");
                });
            });
       },
        error: function(response) {
            // callback para chamadas que falharam.
       },
        complete: function(response){
            // Callback para todas chamadas.
       }
    });
}

// Retrieve session's hash
document.getElementById('fullName').addEventListener('focus', function(){
    PagSeguroDirectPayment.onSenderHashReady(function(response){
        if(response.status == 'error') {
            console.log(response.message);
            return false;
        } else {
            $('#cardHash').val(response.senderHash); //Hash estará disponível nesta variável.
        }
    });
});

// Retrieve the token from the credit card
document.getElementById('btnBuy').addEventListener('click', function(e){  //IMPORTANTE - AQUI O CARA USA A FUNCAO SUBMIT NO FORM DE PAGAMENTO
    e.preventDefault();

    PagSeguroDirectPayment.createCardToken({
        cardNumber: document.getElementById('cardNum').value, // Número do cartão de crédito Test: 4111111111111111
        brand: document.getElementById('cardBrand').value, // Bandeira do cartão - Test: Visa
        cvv: document.getElementById('cardCVV').value, // CVV do cartão - Test: 123
        expirationMonth: document.getElementById('cardMonth').value, // Mês da expiração do cartão - Test: 12
        expirationYear: document.getElementById('cardYear').value, // Ano da expiração do cartão, é necessário os 4 dígitos - Test: 2030
        success: function(response) {
             // Retorna o cartão tokenizado.
             $('#cardToken').val(response.card.token);
        },
        error: function(response) {
                 // Callback para chamadas que falharam.
        },
        complete: function(response) {
             // Callback para todas chamadas.
            formInfo();
        }
     });
});

// Send the intallment value to the form
document.getElementById('qntInstallments').addEventListener('change', function(){
    $('#InstallmentsValue').val($('#qntInstallments').find(':selected').attr('installments-date'));
});

// Data from the form is serialized
function formInfo() {
    var data = $("#paymentForm").serialize();
    console.log(data);
};