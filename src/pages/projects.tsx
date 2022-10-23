import Head from "next/head";
import { DefaultContainer } from "../components/DefaultContainer";
import { Container } from "../styles/pages/projects";

export default function Projects() {

  return (
    <>
      <Head>
        <title>Projetos - Gustavo Murilo Dev</title>
      </Head>
      <DefaultContainer>
        <Container>
          <h1>Projetos</h1>
          <h6>À seguir alguns projetos que fiz/participei:</h6>
        </Container>
      </DefaultContainer>
    </>
  );
}