<?php
require_once '../config/database.php';
session_start();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

try {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($data['email']) || !isset($data['password'])) {
        throw new Exception('Faltan datos requeridos');
    }

    $email = trim($data['email']);
    $password = $data['password'];

    // Validaciones
    if (empty($email) || empty($password)) {
        throw new Exception('Todos los campos son obligatorios');
    }

    // Buscar usuario
    $stmt = $conn->prepare("SELECT id, nombre, email, password, rol FROM usuarios WHERE email = ?");
    $stmt->execute([$email]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$usuario || !password_verify($password, $usuario['password'])) {
        throw new Exception('Credenciales inválidas');
    }

    // Crear sesión
    $_SESSION['usuario_id'] = $usuario['id'];
    $_SESSION['usuario_nombre'] = $usuario['nombre'];
    $_SESSION['usuario_email'] = $usuario['email'];
    $_SESSION['usuario_rol'] = $usuario['rol'];

    // Eliminar password del resultado
    unset($usuario['password']);

    echo json_encode([
        'success' => true,
        'message' => 'Login exitoso',
        'usuario' => $usuario
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'error' => $e->getMessage()
    ]);
}
?> 