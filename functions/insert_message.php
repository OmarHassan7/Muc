<?php
// Establish a database connection (replace with your database credentials)
$mysqli = new mysqli("localhost", "root", "", "sharkawi_muc");

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Check if the request is a POST request

$sender = $_POST['sender'];
$message = $_POST['message'];
$channel_id = $_POST['channel_id']; // Added this line to define $category
$date = date('Y-m-d h:i:s');
// throw new Exception($sender . $message . $channel_id);
// Insert message into the database
$stmt = $mysqli->prepare("INSERT INTO messages (sender, message, channel_id , timestamp) VALUES (?, ?, ? , ?)");
$stmt->bind_param("ssss", $sender, $message, $channel_id, $date);
$stmt->execute();
$stmt->close();

$mysqli->close();
header('Content-Type: application/json');
echo json_encode($channel_id);
