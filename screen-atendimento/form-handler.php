<?php
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$cpf = $_POST['cpf'];
$message = $_POST['message'];

$email_from = 'pedrohenriquewen@gmail.com';
$email_subject = 'Nova solicitação de consulta';
$email_body = "Nome do paciente: $name.\n".
                "Email do paciente: $visitor_email.\n".
                "CPF do paciente: $cpf.\n".
                "Mensagem: $message.\n";

$to = 'pedrohenriquewen7@gmail.com';
$headers = "From: $email_from" ;
$headers .= "Reply-To: $visitor_email \r\n";

mail($to, $email_suject, $email_body, $headers);
header("Location: atendimento.html");
?>
