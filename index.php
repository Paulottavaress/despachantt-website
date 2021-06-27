<?php
// https://www.youtube.com/watch?v=Z-T1QlJY0jM
include './config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button onclick="payment()">Pagar</button>
    <span class="address" data-address="<?php echo URL; ?>"></span>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script type="text/javascript" src="<?php echo SCRIPT_PAGSEGURO; ?>"></script>
    <script src="js/custom.js"></script>
</body>
</html>