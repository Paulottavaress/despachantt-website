<?php
// Tem uma alternativa a linha abaixo https://www.youtube.com/watch?v=0IMz8d9Cby4
header("Access-Control-Allow-Origin: *");
include 'config.php';

$url = URL_PAGSEGURO . "sessions?email=" . EMAIL_PAGSEGURO . "&token=" . TOKEN_PAGSEGURO;
$curl = curl_init($url);

// Essa linha de c贸digo do cara 茅 a mesma s贸 que com Content-Type: na frente
// Aula 1 22:30
curl_setopt($curl, CURLOPT_HTTPHEADER, array("application/x-www-form-urlencoded; charset=UTF-8"));
curl_setopt($curl, CURLOPT_POST, 1);
// O pagseguro exige que o servidor tenha SSL para executar
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$retorno = curl_exec($curl);
curl_close($curl);

$xml = simplexml_load_string($retorno);
echo json_encode($xml);