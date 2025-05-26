function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                <h2>Iniciar Sesión</h2>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="Ingresa tu email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        placeholder="Ingresa tu contraseña"
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
}

export default Login; 