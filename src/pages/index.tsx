import type { NextPage } from 'next'
import Head from 'next/head'
import { DefaultContainer } from '../components/DefaultContainer'
import { DiReact } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { SiTypescript,SiJavascript, SiNextdotjs, SiCss, SiHtml5, SiGit, SiGo, SiMariadb, SiMysql } from "react-icons/si";
import { Tech } from '../components/Tech'
import { Container } from '../styles/pages/home'
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { HeroSection } from '../components/HeroSection';
import { ProjectsSection } from '../components/ProjectsSection';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <DefaultContainer>
      <Head>
        <title>{t('seo.title')}</title>
        <meta name="description" content={t('seo.description')} />
        <meta property="og:title" content={t('seo.og_title')} />
        <meta property="og:description" content={t('seo.og_description')} />
        <meta property="og:type" content="website" />
        <meta name="keywords" content={t('seo.keywords')} />
      </Head>
      
      <HeroSection />

      <Container id="about">
        <div className="header">
          <h1>{t('about_title')}</h1>
        </div>
        <main>
          <p>{t('intro_1')}</p>
          <p dangerouslySetInnerHTML={{ __html: t('intro_2') }}></p>
          <Row>
            <Col md={12}>
              <h2 className="mt-4 mb-4">{t('tech_title')}</h2>
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="React"
                icon={<DiReact  size={64}/>}
                color="#61DAFB"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Go"
                icon={<SiGo size={64}/>}
                color="#00ADD8"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Javascript"
                icon={<SiJavascript size={64}/>}
                color="#F7DF1E"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Typescript"
                icon={<SiTypescript size={64}/>}
                color="#3178C6"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="NextJs"
                icon={<SiNextdotjs size={64}/>}
                color="#FFFFFF"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Bootstrap"
                icon={<BsBootstrapFill size={64}/>}
                color="#7952B3"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="HTML5"
                icon={<SiHtml5 size={64}/>}
                color="#E34F26"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="CSS3"
                icon={<SiCss size={64}/>}
                color="#1572B6"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="Git"
                icon={<SiGit size={64}/>}
                color="#F05032"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="MariaDB"
                icon={<SiMariadb size={64}/>}
                color="#003545"
              />
            </Col>
            <Col md={3} xs={6}>
              <Tech
                name="MySQL"
                icon={<SiMysql size={64}/>}
                color="#4479A1"
              />
            </Col>
          </Row>
        </main>
      </Container>
      
      <ProjectsSection />

    </DefaultContainer>
  )
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
