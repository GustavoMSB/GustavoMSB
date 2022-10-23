import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultContainer } from '../components/DefaultContainer'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <DefaultContainer>
      <Head>
        <title>Gustavo Murilo Dev</title>
      </Head>
      <Header />
    </DefaultContainer>
  )
}

export default Home
