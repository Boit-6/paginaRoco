function Register() {
    return (
        <div className="register-container">
            <form className="register-form">
                <h2>Registro</h2>
                <div className="form-group">
                    <label htmlFor="name">Nombre:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Ingresa tu nombre"
                    />
                </div>
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
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        required 
                        placeholder="Confirma tu contraseña"
                    />
                </div>
                <button type="submit" className="submit-btn">
                    Registrarse
                </button>
            </form>
        </div>
    );
}

export default Register; 