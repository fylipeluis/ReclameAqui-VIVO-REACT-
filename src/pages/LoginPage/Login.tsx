import { LoginForm } from "./LoginPageComponents/InfosDeLogin/LoginForm";
import { TituloInfosDeCadastro } from "./LoginPageComponents/InfosDeLogin/TituloInfosDeCadastro";
import { SideBarPaginaDeLogin } from "./LoginPageComponents/SideBarPaginadeLogin";
import './Login.css';

export default function loginPage() {
  return (
    <>
    <div className="login-page">
    <div className= "left-side">
    <TituloInfosDeCadastro />
    <LoginForm />
    </div>

    <SideBarPaginaDeLogin/>
    </div>
    </>
  )
}

