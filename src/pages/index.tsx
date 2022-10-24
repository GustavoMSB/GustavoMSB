import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultContainer } from '../components/DefaultContainer'
import { Header } from '../components/Header'
import { Container } from '../styles/pages/home'

const Home: NextPage = () => {
  return (
    <DefaultContainer>
      <Head>
        <title>Gustavo Murilo Dev</title>
      </Head>
      <Container>
        <div className="header">
          <h1>Hello, World!</h1>
          <h6>Oi, eu sou Gustavo Murilo, Dev Front-End e este é meu site</h6>
        </div>
      </Container>
    </DefaultContainer>
  )
}

export default Home
