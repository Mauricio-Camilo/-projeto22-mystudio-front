import { useNavigate } from "react-router-dom";
import { Container, Hiperlink, Icon, Logo } from "./style";
import { GrLogout } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import logo from "./../../assets/logo.svg";

function Header() {

     const navigate = useNavigate();

     function logout () {
         const checkLogout = window.confirm("Deseja mesmo sair?")
         if (checkLogout) {
             localStorage.removeItem("token");
             navigate("/");
         }
     }

    return (
        <Container>
            <Icon id="creation" onClick={() => navigate("/insert")}><GrAddCircle/></Icon>
            <Logo src={logo} id="main" onClick={() => navigate("/main")}></Logo>

            {/* <Hiperlink id="main" onClick={() => navigate("/main")}>Símbolo</Hiperlink> */}
            <Icon id="logout" onClick={() => logout()}><GrLogout/></Icon>
        </Container>
    )
}

export default Header;