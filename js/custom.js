function payment(){
    var address = jQuery('.address').attr("data-address");
    console.log(address);
    $.ajax({
        url: address + "payment.php",
        type: 'POST',
        dataType: 'json',
        success: function (retorno){
            console.log(retorno);
        }
    });
}