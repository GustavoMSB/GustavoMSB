import Image from "next/image";
import {DiReact} from "react-icons/di";
import { AiOutlineGithub } from "react-icons/ai";
import { BiMenu, BiX } from "react-icons/bi";
import { MdPersonOutline, MdOutlineCode, MdOutlineContactPage } from "react-icons/md";
import { ReactNode, useState } from "react";
import { Container, Header, Menu, Wrapper } from "./styles";
import { useRouter } from "next/router";

interface ContainerProps {
  children: ReactNode;
}

export function DefaultContainer({children}: ContainerProps) {
  const router = useRouter();
  const route = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openGithub() {
    window.open("https://github.com/gustavomsb", "_blank")
  };

  return (
    <Container>
      <Header>
        <div className="start">
          <div className="react-logo">
            <DiReact size={40}/>
          </div>
          <h3>Gustavo Murilo</h3>
          <h1>DEV</h1>
        </div>
        <button
          className="menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <BiX size={28}/> : <BiMenu size={28}/>}
        </button>

        <Menu isActive={isMenuOpen}>
          <button
            className={route === "/" ? "active" : "" }
            onClick={() => router.push("/")}
          >
            <MdPersonOutline size={20} />
            Sobre mim
          </button>
          <button
            className={route === "/projects" ? "active" : "" }
            onClick={() => router.push("/projects")}  
          >
            <MdOutlineCode size={20} />
            Projetos
          </button>
          <button className={route === "/contact" ? "contact" : "" }>
            <MdOutlineContactPage size={20} />
            Contato
          </button>
          <button
            onClick={openGithub}
          >
            <AiOutlineGithub size={20} />
            Github
          </button>
        </Menu>
      </Header>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}