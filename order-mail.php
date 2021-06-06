<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$service = $_POST['service'];
	$master = $_POST['master'];
	$date = $_POST['date'];
	$time = $_POST['time'];

	$content = $name . ' оставил заявку на визит к баребру. Его телефон: ' . $phone . ' Он хочет услугу ' . $service . ' у барбера ' . $master . '. Он хочет прийти ' . $date . ' в ' . $time . '.';

	$success = mail("admin@barberclub.com", 'Заявка на визит', $content);

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
