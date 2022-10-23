import Image from "next/image";
import {DiReact} from "react-icons/di";
import { AiOutlineGithub } from "react-icons/ai";
import { MdPersonOutline, MdOutlineCode, MdOutlineContactPage } from "react-icons/md";
import { ReactNode } from "react";
import { Container, Header, Menu, Wrapper } from "./styles";

interface ContainerProps {
  children: ReactNode;
}

export function DefaultContainer({children}: ContainerProps) {
  return (
    <Container>
      <Header>
        <div className="react-logo">
          <DiReact size={40}/>
        </div>
        <h3>Gustavo Murilo</h3>
        <h1>DEV</h1>

        <Menu>
          <button className="active">
            <MdPersonOutline size={20} />
            Sobre mim
          </button>
          <button>
            <MdOutlineCode size={20} />
            Projetos
          </button>
          <button>
            <MdOutlineContactPage size={20} />
            Contato
          </button>
          <button>
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