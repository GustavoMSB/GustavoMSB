import Image from "next/image";
import {DiReact} from "react-icons/di";
import { AiOutlineGithub } from "react-icons/ai";
import { MdPersonOutline, MdOutlineCode, MdOutlineContactPage } from "react-icons/md";
import { ReactNode } from "react";
import { Container, Header, Menu, Wrapper } from "./styles";
import { useRouter } from "next/router";

interface ContainerProps {
  children: ReactNode;
}

export function DefaultContainer({children}: ContainerProps) {
  const router = useRouter();

  function openGithub() {
    window.open("https://github.com/gustavomsb", "_blank")
  };

  return (
    <Container>
      <Header>
        <div className="react-logo">
          <DiReact size={40}/>
        </div>
        <h3>Gustavo Murilo</h3>
        <h1>DEV</h1>

        <Menu>
          <button
            className={router.pathname === "/" ? "active" : "" }
            onClick={() => router.push("/")}
          >
            <MdPersonOutline size={20} />
            Sobre mim
          </button>
          <button
            className={router.pathname === "/projects" ? "active" : "" }
            onClick={() => router.push("/projects")}  
          >
            <MdOutlineCode size={20} />
            Projetos
          </button>
          <button className={router.pathname === "/" ? "contact" : "" }>
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