import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert('Login efetuado!')
    navigate('/')
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Senha" required />
        <button type="submit" className="btn">Entrar</button>
      </form>
      <button className="link" onClick={() => navigate('/')}>
        Voltar
      </button>
    </div>
  )
}
