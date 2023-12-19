<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate form data
    $currentPassword = isset($_POST["currentPassword"]) ? $_POST["currentPassword"] : "";
    $newPassword = isset($_POST["newPassword"]) ? $_POST["newPassword"] : "";
    $confirmPassword = isset($_POST["confirmPassword"]) ? $_POST["confirmPassword"] : "";

    // Perform basic validation
    if (empty($currentPassword) || empty($newPassword) || empty($confirmPassword)) {
        // Handle empty fields
        $message = "All fields are required.";
    } elseif ($newPassword != $confirmPassword) {
        // Handle password mismatch
        $message = "New Password and Confirm Password do not match.";
    } else {
        // Database connection parameters
        $hostname = 'localhost';
        $username = 'root';
        $password = '';
        $db = 'forget';

        // Establish database connection
        $conn = mysqli_connect($hostname, $username, $password, $db);

        // Check for connection errors
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        }

        // Use prepared statements to prevent SQL injection
        $Insert = "INSERT INTO form (currentPassword, newPassword, confirmPassword) VALUES (?, ?, ?)";
        $stmt = mysqli_prepare($conn, $Insert);
        mysqli_stmt_bind_param($stmt, "sss", $currentPassword, $newPassword, $confirmPassword);

        // Execute the query
        $result = mysqli_stmt_execute($stmt);

        // Check for query execution success
        if ($result) {
            $message = "Password change successful.";
        } else {
            $message = "Error changing password: " . mysqli_error($conn);
        }

        // Close the statement and connection
        mysqli_stmt_close($stmt);
        mysqli_close($conn);
    }
}
?>
<!-- The rest of your HTML remains unchanged -->
<html>
<head>
<title>Change Password</title>
<link rel="stylesheet" type="text/css" href="styles.css" />
<script>
function validatePassword() {
    var currentPassword, newPassword, confirmPassword, output = true;

    currentPassword = document.frmChange.currentPassword;
    newPassword = document.frmChange.newPassword;
    confirmPassword = document.frmChange.confirmPassword;

    if (!currentPassword.value) {
        currentPassword.focus();
        document.getElementById("currentPassword").innerHTML = "required";
        output = false;
    } else if (!newPassword.value) {
        newPassword.focus();
        document.getElementById("newPassword").innerHTML = "required";
        output = false;
    } else if (!confirmPassword.value) {
        confirmPassword.focus();
        document.getElementById("confirmPassword").innerHTML = "required";
        output = false;
    }
    if (newPassword.value != confirmPassword.value) {
        newPassword.value = "";
        confirmPassword.value = "";
        newPassword.focus();
        document.getElementById("confirmPassword").innerHTML = "not same";
        output = false;
    }
    return output;
}
</script>
</head>
<body>
    <form name="frmChange" method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"
        onSubmit="return validatePassword()">
        <div style="width: 500px;">
            <div class="message"><?php if (isset($message)) { echo $message; } ?></div>
            <table border="0" cellpadding="10" cellspacing="0"
                width="500" align="center" class="tblSaveForm">
                <tr class="tableheader">
                    <td colspan="2">Change Password</td>
                </tr>
                <tr>
                    <td width="40%"><label>Current Password</label></td>
                    <td width="60%"><input type="password"
                        name="currentPassword" class="txtField" /><span
                        id="currentPassword" class="required"></span></td>
                </tr>
                <tr>
                    <td><label>New Password</label></td>
                    <td><input type="password" name="newPassword"
                        class="txtField" /><span id="newPassword"
                        class="required"></span></td>
                </tr>
                <td><label>Confirm Password</label></td>
                <td><input type="password" name="confirmPassword"
                    class="txtField" /><span id="confirmPassword"
                    class="required"></span></td>
                </tr>
                <tr>
                    <td colspan="2"><input type="submit" name="submit"
                        value="Submit" class="btnSubmit"></td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>
