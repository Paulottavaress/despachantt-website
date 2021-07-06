<?php
// https://www.youtube.com/watch?v=Agwk70wdrcA&list=PLmY5AEiqDWwD2mkvDEBS9Bqfk95ziKT02&index=7
include './config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Check-out</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
    <link href="https://fonts.googleapis.com/css?family=Dosis" rel="stylesheet"/>
    <link rel="stylesheet" href="css/payment.css" />
</head>
<body>
    <span class="address" data-address="<?php echo URL; ?>"></span>
    <span id="msg"><span>
    <form name="formPagamento" action="" id="paymentForm">
        <!-- Lembrar de impedir que o usuário copie e cole nesse campo -->
        <label>Nome completo</label>
        <input type="text" name="fullName" id="fullName"><br>
        <label>Número do cartão</label>
        <input type="text" name="cardNum" id="cardNum"><br>
        <label>Bandeira do cartão</label>
        <input type="text" name="cardBrand" id="cardBrand"><br>
        <label>CVV do cartão</label>
        <input type="text" name="cardCVV" id="cardCVV"><br>
        <label>Mês de validade</label>
        <input type="text" name="cardMonth" id="cardMonth" placeholder="07" maxlength="2"><br>
        <label>Ano de validade</label>
        <input type="text" name="cardYear" id="cardYear" placeholder="2021" maxlength="4"><br>
        <label>Quantidade de parcelas</label>
        <select name="qntInstallments" id="qntInstallments" class="select-qnt-installments">
            <option value="">Selecione</option>
        </select><br>
        <label>Valor das parcelas</label>
        <input type="text" name="InstallmentsValue" id="InstallmentsValue"><br>
        <label>Token do cartão</label>
        <input type="text" name="cardToken" id="cardToken"><br>
        <label>Identificador com os dados do comprador</label>
        <input type="text" name="cardHash" id="cardHash">
        <input type="submit" name="btnBuy" id="btnBuy" value="Comprar">
    </form>
    <div class="card-banner"></div>
    <div class="payment-methods"></>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo SCRIPT_PAGSEGURO; ?>"></script>
    <script src="js/custom.js"></script>
</body>
</html>