<?php

// $siteEmail = "technodar@group.ru";
// $siteName = "Technodar";
// $siteUrl = ((!empty($_SERVER['HTTPS'])) ? 'https' : 'http') . '://' . $_SERVER['HTTP_HOST'];
// $emailTo = "slimeshot@mail.ru";

// $name = $_POST['name'];
// $email = $_POST['email'];
// $phone = $_POST['phone'];
$formID = $_POST['formID'];

// $message = "Поступила заявка на сайт";

// $message .= "\n\nАдрес сайта: $siteUrl";
// $message .= "\nОписание: Форма обратного звонка в модальном окне";

// $pagetitle = "Заявка с сайта \"$siteName\"";

// $headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
// $headers .= "From: ". $siteName ." <". $siteEmail ."> \r\n";

// $send = mail( $emailTo, $pagetitle, $message, $headers, '-f'. $siteEmail );

if ( $formID ) {
	echo "Ваша заявка отправлена. Мы ответим вам в ближайшее время.\r\n";
} else {
	echo "Не удалось отправить, попробуйте снова!";
}

?>