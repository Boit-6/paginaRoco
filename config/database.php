<?php
$host = getenv('DB_HOST') ?: 'localhost';
$dbname = getenv('DB_DATABASE') ?: 'roco_db';
$username = getenv('DB_USERNAME') ?: 'roco_user';
$password = getenv('DB_PASSWORD') ?: 'roco_password';

try {
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    
    $conn = new PDO($dsn, $username, $password, $options);
    
    // Verificar la conexión
    $conn->query('SELECT 1');
    
} catch(PDOException $e) {
    error_log("Error de conexión a la base de datos: " . $e->getMessage());
    die("Error de conexión a la base de datos. Por favor, intente más tarde.");
}
?> 