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
          <h4>Me Gustavo Murilo, sou desenvolvedor Front-End e este é meu site!</h4>
        </div>
        <main>
          <p>
            Apaixonado por tecnologia desde criança, sempre resolvendo problemas em que alguns familiares não conseguiam,
            e sempre me perguntando como aquilo funcionava. Em 2017 tive meu primeiro contato com programação no <a href="http://www.ifs.edu.br/">IFS</a> e encontrei algo que queria para o meu futuro.
          </p>
          <p>
            Terminando o ensino médio comecei a graduação em Sistemas de Informação em 2019 na <a href="https://www.ufs.br/">UFS</a> e desde então venho me aperfeiçoando na área de desenvolvimento.
            Devido a pandemia de 2020 eu percebi que não poderia parar de estudar e comecei a estudar desenvolvimento web, em diversas fontes (recomento bastante), fiz curso no Youtube, Udemy, Rocketseat entre outros,
            li a documentação do Mozilla, fiz exercícios do W3Schools e sempre fazia projetos pessoais.
          </p>
          <p>
            Em 2021 tive minha primeira oportunidade de estágio e o foco era o Front-End (área que mais me identifiquei nos estudos), 
            senti dificuldade no início mas tive bastante persitência pois sabia que eu era capaz, consegui adquirir bastante conhecimento e me aperfeiçoei
            muito, fui promovido e me tornei Desenvolvedor Front-End Jr.
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
