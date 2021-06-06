<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$clientName = $_POST['client-name'];
	$phoneNumber = $_POST['phone-number'];

	$content = $clientName . ' заказал звонок. Его телефон: ' . $phoneNumber;

	$success = mail("callme@barberclub.com", 'Заказ звонка', $content);

	if ($success) {
		http_response_code(200);
		echo "Письмо отправлено";
	} else {
		http_response_code(500);
		echo "Письмо не отправлено";
	}
} else {
	http_response_code(403);
	echo "Данный метод запроса не поддерживается сервером";
}
