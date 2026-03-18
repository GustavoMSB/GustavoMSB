import Image from "next/image";
import {DiReact} from "react-icons/di";
import { AiOutlineGithub } from "react-icons/ai";
import { BiMenu, BiX, BiSun, BiMoon } from "react-icons/bi";
import { MdPersonOutline, MdOutlineCode } from "react-icons/md";
import { ReactNode, useState } from "react";
import { Container, Header, Menu, Wrapper, ThemeToggler, TogglersWrapper } from "./styles";
import { useRouter } from "next/router";
import { useTheme } from "../../contexts/ThemeContext";
import { useTranslation } from "next-i18next";

interface ContainerProps {
  children: ReactNode;
}

export function DefaultContainer({children}: ContainerProps) {
  const router = useRouter();
  const route = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { themeName, toggleTheme } = useTheme();
  const { t } = useTranslation('common');

  function openGithub() {
    window.open("https://github.com/gustavomsb", "_blank")
  };

  const handleLanguageToggle = () => {
    const nextLocale = router.locale === 'pt-BR' ? 'en' : 'pt-BR';
    router.push(router.pathname, router.asPath, { locale: nextLocale });
  };

  return (
    <Container>
      <Header>
        <div className="start" style={{ cursor: 'pointer' }} onClick={() => router.push("/#home")}>
          <div className="react-logo">
            <DiReact size={40}/>
          </div>
          <h3>Gustavo Murilo</h3>
          <h1>DEV</h1>
        </div>
        
        <div className="right-side">
            <Menu isActive={isMenuOpen}>
            <button
                //className={route === "/" || route === "/#about" ? "active" : "" }
                onClick={() => {
                  router.push("/#about");
                  setIsMenuOpen(false);
                }}
            >
                <MdPersonOutline size={20} />
                {t('menu.about')}
            </button>
            <button
                //className={route === "/#projects" ? "active" : "" }
                onClick={() => {
                  router.push("/#projects");
                  setIsMenuOpen(false);
                }}  
            >
                <MdOutlineCode size={20} />
                {t('menu.projects')}
            </button>

            <button
                onClick={openGithub}
            >
                <AiOutlineGithub size={20} />
                {t('menu.github')}
            </button>
            </Menu>

            <TogglersWrapper>
                <ThemeToggler onClick={handleLanguageToggle}>
                {router.locale === 'pt-BR' ? '🇺🇸' : '🇧🇷'}
                </ThemeToggler>
                <ThemeToggler onClick={toggleTheme}>
                {themeName === 'light' ? <BiMoon size={24}/> : <BiSun size={24}/>}
                </ThemeToggler>
            </TogglersWrapper>

            <button
            className="menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            {isMenuOpen ? <BiX size={28}/> : <BiMenu size={28}/>}
            </button>
        </div>
      </Header>
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}