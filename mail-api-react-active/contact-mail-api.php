<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$isim = trim($_GET["name-surname"]);
$konu = trim($_GET["subject"]);
$baslik = $konu;
$musteri_email = trim($_GET["email"]);
$musteri_telno = trim($_GET["phone"]);
$mesaj = trim($_GET["message"]);

$email = "zaferkalik@gmail.com";
$url = '<html>
		<body>
			<center>
				<h1 style="margin-top: 40px;margin-bottom:80px;">zaferkalik.com</h1>
				<ul style="list-style-type: none;">
					<li style="font-size: 20px;font-weight:500;margin-bottom: 5px;color:#203593;">Konu:</li>
					<li style="margin-bottom:14px;">' . $konu . '</li>
					<li style="font-size: 20px;font-weight:500;margin-bottom: 5px;color:#203593;">İsim Soyisim:</li>
					<li style="margin-bottom:14px;">' . $isim . '</li>
					<li style="font-size: 20px;font-weight:500;margin-bottom: 5px;color:#203593;">Gönderenin email adresi:</li>
					<li style="margin-bottom:14px;">' . $musteri_email . '</li>
					<li style="font-size: 20px;font-weight:500;margin-bottom: 5px;color:#203593;">Göndericinin Telefon Numarası</li>
					<li style="margin-bottom:14px;">' . $musteri_telno . '</li>
					<li style="font-size: 20px;font-weight:500;margin-bottom: 5px;color:#203593;">Göndericinin Mesajı</li>
					<li style="margin-bottom:14px;">' . $mesaj . '</li>
				</ul>
			</center>
		</body>
		</html>';
$mail = new PHPMailer;
$mail->IsSMTP();
//$mail->SMTPDebug = 1; // hata ayiklama: 1 = hata ve mesaj, 2 = sadece mesaj
$mail->SMTPAuth = true;
$mail->SMTPSecure = 'tls'; // Güvenli baglanti icin ssl normal baglanti icin tls
$mail->Host = "smtp.gmail.com"; // Mail sunucusuna ismi
$mail->Port = 587; // Gucenli baglanti icin 465 Normal baglanti icin 587
$mail->IsHTML(true);
$mail->SetLanguage("tr", "phpmailer/language");
$mail->CharSet = "utf-8";
$mail->Username = "zaferkalik1992@gmail.com"; // Mail adresimizin kullanicı adi
$mail->Password = "xswvndwofgtakosm"; // Mail adresimizin sifresi
$mail->SetFrom("zaferkalik1992@gmail.com", $isim); // Mail attigimizda gorulecek ismimiz
$mail->AddAddress($email); // Maili gonderecegimiz kisi yani alici
$mail->addReplyTo($email, $isim);
$mail->Subject = $baslik; // Konu basligi
$mail->Body = $url; // Mailin icerigi
$mail->Send(); // Gönderme işlemi
