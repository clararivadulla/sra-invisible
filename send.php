<?php 
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = 'Formulario de contacto - Sra. Invisible';
	$message = "Nombre: ".$nombre."<br> Email: $email<br> Message:".$_POST['message'];


	if(mail('belengomezjimenez@gmail.com', $subject, $message)){
		echo "Sent!";
	}
 ?>