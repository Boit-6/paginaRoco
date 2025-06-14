<?php
require_once '../config/database.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['nombre']) || !isset($data['email']) || !isset($data['password'])) {
        throw new Exception('Faltan datos requeridos');
    }

    $nombre = trim($data['nombre']);
    $email = trim($data['email']);
    $password = $data['password'];

    // Validaciones
    if (empty($nombre) || empty($email) || empty($password)) {
        throw new Exception('Todos los campos son obligatorios');
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Email no válido');
    }

    if (strlen($password) < 6) {
        throw new Exception('La contraseña debe tener al menos 6 caracteres');
    }

    // Verificar si el email ya existe
    $stmt = $conn->prepare("SELECT id FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->fetch()) {
        throw new Exception('El email ya está registrado');
    }

    // Hash de la contraseña
    $passwordHash = password_hash($password, PASSWORD_DEFAULT);

    // Insertar usuario
    $stmt = $conn->prepare("INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)");
    $result = $stmt->execute([$nombre, $email, $passwordHash]);

    if ($result) {
        echo json_encode([
            'success' => true,
            'message' => 'Usuario registrado correctamente'
        ]);
    } else {
        throw new Exception('Error al registrar el usuario');
    }

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'error' => $e->getMessage()
    ]);
}
?> 