<?php

define("URL", "http://localhost/Projetos/DESPACHANTT/");

$sandbox = true;
if($sandbox){
    define("EMAIL_PAGSEGURO", "sample@gmail.com");
    define("TOKEN_PAGSEGURO", "B6F39C0429A34781B320249999A989B8");
    define("URL_PAGSEGURO", "https://ws.sandbox.pagseguro.uol.com.br/v2/");
    define("SCRIPT_PAGSEGURO", "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js");
}else{
    define("EMAIL_PAGSEGURO", "sample@gmail.com");
    define("TOKEN_PAGSEGURO", "B6F39C0429A34781B320249999A989B8"); //Gerar token real em preferências na conta pag seguro
    define("URL_PAGSEGURO", "https://ws.pagseguro.uol.com.br/v2/");
    define("SCRIPT_PAGSEGURO", "https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js");
}