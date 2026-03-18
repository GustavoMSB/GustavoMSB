import { Container } from "./styles";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export function HeroSection() {
  const { t } = useTranslation('common');
  const router = useRouter();

  return (
    <Container id="home">
      <div className="animated-background">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <div className="content">
        <h1 className="reveal-text">
          {router.locale === 'en' ? (
            <>
              <span className="line accent">{t('hero.title_1')}</span>
              <span className="line ">{t('hero.title_2')}</span>
            </>
          ) : (
            <>
              <span className="line ">{t('hero.title_1')}</span>
              <span className="line accent">{t('hero.title_2')}</span>
            </>
          )}
        </h1>
        <p className="reveal-text-delayed">
          {t('subtitle')}
        </p>
        <div className="cta-buttons reveal-text-delayed">
          <a href="#projects" className="primary">
            {t('hero.cta_projects')}
          </a>
          <a href="#about" className="secondary">
            {t('hero.cta_about')}
          </a>
        </div>
      </div>
    </Container>
  );
}
