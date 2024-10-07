<?php
// Include database connection file
include('connection.php'); // Make sure this file is in the same directory

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $whatsapp = $_POST['whatsapp'];
    $message = $_POST['message'];

    // Store data in the database
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, whatsapp, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $whatsapp, $message);

    // if ($stmt->execute()) {
    //     // Data stored successfully, send a success response
    //     prompt(['success' => true, 'message' => 'Form submitted successfully']);
    // } else {
    //     // Error storing data in the database
    //     echo json_encode(['success' => false, 'message' => 'Failed to store data in the database']);
    // }

    $stmt->close();
    exit;
}
?>

