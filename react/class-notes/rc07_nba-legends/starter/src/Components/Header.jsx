import ilkLogo from "../assets/nba-logo.png";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";


const Header = ()=>{
    return(
        <Container>
            <Image src={ilkLogo} ></Image>
            <h1 className="my-2 font-monospace display-4 fw-bold">NNB Efsaneleri</h1>
        </Container>
    )
};

export default Header;