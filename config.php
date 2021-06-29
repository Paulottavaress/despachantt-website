<?php

define("URL", "http://localhost/Projetos/DESPACHANTT/");

$sandbox = true;
if($sandbox){
    define("EMAIL_PAGSEGURO", "");
    define("TOKEN_PAGSEGURO", "");
    define("URL_PAGSEGURO", "https://ws.sandbox.pagseguro.uol.com.br/v2/");
    define("SCRIPT_PAGSEGURO", "https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js");
}else{
    define("EMAIL_PAGSEGURO", "");
    define("TOKEN_PAGSEGURO", ""); //Gerar token real em preferências na conta pag seguro
    define("URL_PAGSEGURO", "https://ws.pagseguro.uol.com.br/v2/");
    define("SCRIPT_PAGSEGURO", "https://stc.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js");
}