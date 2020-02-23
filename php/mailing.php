<?php
    $mailTo = '';

    if($_SERVER['REQUEST_METHOD'] === 'POST') {
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $mailFrom = $_POST['mail'];
        $error = '';
        $response = array();

        if (empty($name)){
            $error = 'Не указано имя';
        }
        if (empty($phone) && empty($mailFrom)){
            $error = 'Не указан телефон или e-mail';
        }
        if (empty($phone)){
            $phone = 'Телефон не указан';
        }
        if (empty($mailFrom)){
            $mailFrom = 'Почта не указана';
        }

        if (!empty($error)){
            $response['error'] = true;
            $response['message'] = $error;
        } else {
            $subject = 'Запрос обратного звонка с сайта!';
            $body    = '
            Имя: '.$name.'
            Телефон: '.$phone.'
            Почта: '.$mailFrom;

        mail($mailTo, $subject, $body);
        $response['error'] = false;
        $response['message'] = 'Ваш запрос успешно отправлен. Спасибо.';
        }
        echo json_encode($response);
    }
?>