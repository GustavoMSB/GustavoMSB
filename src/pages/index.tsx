import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultContainer } from '../components/DefaultContainer'
import { DiReact, DiJavascript1 } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTypescript,SiJavascript, SiNextdotjs, SiCss3, SiHtml5, SiGit } from "react-icons/si";
import { Tech } from '../components/Tech'
import { Container } from '../styles/pages/home'
import { Col, Row } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <DefaultContainer>
      <Head>
        <title>Gustavo Murilo Dev</title>
      </Head>
      <Container>
        <div className="header">
          <h1>Seja muito bem-vindo</h1>
          <h4>Me chamo Gustavo, sou desenvolvedor Front-End e este é meu site!</h4>
        </div>
        <main>
          <p>
            Apaixonado por tecnologia desde criança, sempre resolvendo problemas em que alguns familiares não conseguiam,
            e sempre me perguntando como aquilo funcionava. Em 2017 tive meu primeiro contato com programação no <a href="http://www.ifs.edu.br/">IFS</a> e me apaixonei e escolhi desenvolvimento web como minha área de atuação.
          </p>
          <Row>
            <Col md={12}>
              <h2 className="mt-4 mb-4">Principais tecnologias</h2>
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="React"
                icon={<DiReact size={64}/>}
                background={true}
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Javascript"
                icon={<SiJavascript size={64}/>}
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Typescript"
                icon={<SiTypescript size={64}/>}
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="NextJs"
                icon={<SiNextdotjs size={64}/>}
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Bootstrap"
                icon={<BsBootstrapFill size={64}/>}
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="HTML5"
                icon={<SiHtml5 size={64}/>}
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="CSS3"
                icon={<SiCss3 size={64}/>}
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Git"
                icon={<SiGit size={64}/>}
              />
            </Col>
          </Row>
        </main>
      </Container>
    </DefaultContainer>
  )
}

export default Home
