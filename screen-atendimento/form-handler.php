<?php

if (isset($_POST['email']) && !empty$_POST['email']) {
$nome = addslashes($_POST['name']);
$email = addslashes($_POST['email']);
$cpf = addslashes($_POST['cpf']);
$subject = addslashes($_POST['subject']);
$message = addslashes($_POST['message']);

$to = "inciativa.viver.bem@gmail.com";
$body = "Nome do paciente: ".$nome."\r\n".
        "Email do paciente: ".$email."\r\n".
        "Mensagem: ".$message;
$header = "From:pzinhobr@gmail.com"."\r\n".
            "Reply-To: $email"."\e\n".
            "X=Mailer:PHP/".phpversion

if (mail($to, $subject, $body, $header)) {
    echo("Email enviado com sucesso");
}else{
    echo("Email não ser enviado");  
}
}
?>
