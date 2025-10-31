import { Link } from "react-router-dom";
import "./HeaderwelcomePage.css";
import { LogoHeader } from "../../ComponentesGlobais/LogoHeader";

export function HeaderWelcomePage() {
  return (
    <section className="header">
      <LogoHeader />
      <div className="button-enter">
        <nav>
          <ul>
            <li>
              <Link to="./login">Entrar</Link>
            </li>
            <li>
              <Link to="./cadastro">Cadastre-se</Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
