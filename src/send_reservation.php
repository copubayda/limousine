<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Include PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Adjust path if PHPMailer is installed differently

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

// Validate required fields
$required_fields = ['name', 'email', 'phone', 'date', 'time', 'pickup', 'dropoff'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Missing required field: $field"]);
        exit;
    }
}

$mail = new PHPMailer(true);

try {
    // Enable verbose debug output
    $mail->SMTPDebug = 2; // 0 = off, 1 = client messages, 2 = client and server messages
    $mail->Debugoutput = function($str, $level) {
        file_put_contents('debug.log', date('Y-m-d H:i:s') . " [$level] $str\n", FILE_APPEND);
    };

    // Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com'; // Replace with your SMTP host
    $mail->SMTPAuth = true;
    $mail->Username = 'limokeysair@gmail.com'; // Replace with your email
    $mail->Password = 'xrvi ufhz dpat kpya'; // Replace with your password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Recipients
    $mail->setFrom('noreply@limokeyser.com', 'LimoKeyser Reservation');
    $mail->addAddress('limokeysair@gmail.com'); // Replace with your reservation email

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Nouvelle réservation - LimoKeyser';

    $body = "
    <h2>Nouvelle demande de réservation</h2>
    <p><strong>Nom:</strong> {$data['name']}</p>
    <p><strong>Email:</strong> {$data['email']}</p>
    <p><strong>Téléphone:</strong> {$data['phone']}</p>
    <p><strong>Date:</strong> {$data['date']}</p>
    <p><strong>Heure:</strong> {$data['time']}</p>
    <p><strong>Lieu de prise en charge:</strong> {$data['pickup']}</p>
    <p><strong>Lieu de dépose:</strong> {$data['dropoff']}</p>
    <p><strong>Message:</strong> " . (empty($data['message']) ? 'Aucun' : nl2br($data['message'])) . "</p>
    ";

    $mail->Body = $body;
    $mail->AltBody = strip_tags($body);

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Réservation envoyée avec succès']);
} catch (Exception $e) {
    // Log the error
    $errorMessage = date('Y-m-d H:i:s') . " Error: {$mail->ErrorInfo}\n";
    file_put_contents('error.log', $errorMessage, FILE_APPEND);
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => "Erreur lors de l'envoi: {$mail->ErrorInfo}", 'debug' => $errorMessage]);
}
?>
