// Header component
function createHeader() {
    const header = document.createElement('header');
    header.classList.add('main-header');

    // Create navigation
    const nav = document.createElement('nav');
    nav.classList.add('nav-container');

    // Create logo/site name
    const siteName = document.createElement('div');
    siteName.classList.add('site-name');
    siteName.textContent = '< CyberLogin />';

    // Create buttons container
    const authButtons = document.createElement('div');
    authButtons.classList.add('auth-buttons');

    // Create Login button
    const loginBtn = document.createElement('button');
    loginBtn.classList.add('btn', 'login-btn');
    loginBtn.textContent = '[ Login ]';
    loginBtn.onclick = () => {
        window.location.href = './login.html';
    };

    // Create Register button
    const registerBtn = document.createElement('button');
    registerBtn.classList.add('btn', 'register-btn');
    registerBtn.textContent = '[ Register ]';
    registerBtn.onclick = () => {
        window.location.href = './register.html';
    };

    // Append buttons to container
    authButtons.appendChild(loginBtn);
    authButtons.appendChild(registerBtn);

    // Append elements to nav
    nav.appendChild(siteName);
    nav.appendChild(authButtons);

    // Append nav to header
    header.appendChild(nav);

    return header;
}

// Export the function
export { createHeader }; 