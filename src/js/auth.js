async function checkAuthStatus() {
    try {
        const response = await fetch('php/check_auth.php');
        const data = await response.json();
        
        const authButtons = document.querySelector('.auth-buttons');
        const siteName = document.querySelector('.site-name');
        
        if (data.authenticated) {
            // Si está autenticado, mostrar el emoji y el nombre del usuario
            siteName.textContent = `Roco 🧉`;
            authButtons.innerHTML = `
                <span class="user-name">${data.usuario.nombre}</span>
                <button onclick="logout()" class="btn logout-btn">Cerrar sesión</button>
            `;
        } else {
            // Si no está autenticado, mostrar los botones de login/register
            siteName.textContent = 'Roco';
            authButtons.innerHTML = `
                <a href="login.html" class="btn login-btn">Login</a>
                <a href="register.html" class="btn register-btn">Register</a>
            `;
        }
    } catch (error) {
        console.error('Error checking auth:', error);
    }
}

async function logout() {
    try {
        const response = await fetch('php/logout.php');
        const data = await response.json();
        
        if (data.success) {
            window.location.href = 'login.html';
        }
    } catch (error) {
        console.error('Error logging out:', error);
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', checkAuthStatus); 