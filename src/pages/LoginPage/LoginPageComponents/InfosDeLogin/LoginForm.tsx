import "./LoginForm.css";

export function LoginForm () {
    return (
        <div>
            <form>
                <div className="login-content">
                    <label htmlFor="login">Login</label>
                    <input type="text" id="login"/>
                </div>

                <div className="password-content">
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password"/>
                </div>

                <div className="forgot-password">
                    <a href="#" className="forgot-password-link">Esqueci a senha</a>
                </div>

                <div className="conect">
                    <button type="submit" className="btn-conect">Conectar-se</button>

                    <p id="error-message"></p>
                </div>
            </form>
        </div>
)
}