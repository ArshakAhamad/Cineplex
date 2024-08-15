<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the username and password are correct (dummy check)
    $username = "your_username"; // Replace with your actual username
    $password = "your_password"; // Replace with your actual password

    if ($_POST["login_name"] == $username && $_POST["password"] == $password) {
        // Redirect to the main page if login is successful
        header("Location: index.html");
        exit();
    } else {
        // Redirect back to the login page with an error message
        header("Location: login.html?error=invalid_credentials");
        exit();
    }
}
?>
	
</body>
</html>