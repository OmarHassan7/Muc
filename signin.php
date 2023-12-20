<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $id = $_POST["idnumber"];
    $password = $_POST["passcode"];

    if (strlen($id) !== 8) {
        echo "Invalid ID format. ID should have a length of 8 characters.";
        exit;
    }
    // Database connection details
    $servername = "localhost";
    $username = "root";
    $password_db = "";
    $dbname = "sharkawi_muc";

    // Create a database connection
    $conn = new mysqli($servername, $username, $password_db, $dbname);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and execute an SQL query to check if the user exists
    $check_stmt = $conn->prepare("SELECT id, password FROM users WHERE id = ?");
    $check_stmt->bind_param("s", $id);
    $check_stmt->execute();
    $check_result = $check_stmt->get_result();

    if ($check_result->num_rows > 0) {
        // User found, check password
        $user_data = $check_result->fetch_assoc();
        $stored_password = $user_data["password"];

        if ($password == $stored_password) {
            // Password is correct
            echo "Valid login!";
        } else {
            $servername = 'localhost';
            $username = 'root';
            $password = '';
            $dbname = 'sharkawi_muc';

            // Create a new PHPMailer instance
            $mail = new PHPMailer(true);

            try {
                // Create database connection
                $conn = new mysqli($servername, $username, $password, $dbname);

                // Check the connection
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                // Get the user's email and password from the database based on the provided ID

                $stmt = $conn->prepare('SELECT email, password FROM users WHERE id = ?');
                $stmt->bind_param('i', $id);
                $stmt->execute();
                $stmt->bind_result($email, $password);
                $stmt->fetch();
                $stmt->close();

                // Set mailer to use SMTP
                $mail->isSMTP();
                $mail->Host = 'smtp.gmail.com';
                $mail->SMTPAuth = true;
                $mail->Username = 'mucuniversity2@gmail.com'; // replace with your Gmail username
                $mail->Password = 'mqutrevsudcbsqkm'; // replace with your Gmail password
                $mail->SMTPSecure = 'ssl';
                $mail->Port = 465;

                // Set the sender's email address
                $mail->setFrom('mucuniversity2@gmail.com');

                // Check if the email was found in the database
                if ($email) {
                    // Set the recipient's email address
                    $mail->addAddress($email);

                    $mail->isHTML(true);
                    $mail->Subject = 'Your Forgetten Password';
                    $mail->Body = 'Your password is: ' . $password;

                    // Send the email
                    $mail->send();
                    echo "Your Correct Password is  Sent to Your University Email Successfully";
                } else {
                    echo "Email not found in the database for the provided ID.";
                }
            } catch (Exception $e) {
                echo 'Error: ' . $e->getMessage();
            }
        }
    } else {
        // User not found
        echo "Invalid ID!";
    }

    // Close the statement and database connection
    $check_stmt->close();
    $conn->close();
} else {
    echo "Invalid request method";
}
