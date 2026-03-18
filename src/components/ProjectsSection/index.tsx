import { Container } from "./styles";
import { ProjectCard } from "../ProjectCard";
import { useTranslation } from "next-i18next";

export function ProjectsSection() {
  const { t } = useTranslation('common');

  return (
    <Container id="projects">
      <div className="header">
        <h2>{t('projects.title')}</h2>
        <p>{t('projects.subtitle')}</p>
      </div>
      <div className="grid">
        <ProjectCard
          title={t('projects.items.portfolio.title')}
          description={t('projects.items.portfolio.description')}
          tags={["Next.js", "React", "TypeScript", "Styled-Components"]}
          githubUrl="https://github.com/gustavomsb"
          previewUrl="https://github.com/gustavomsb"
        />
        <ProjectCard
          title={t('projects.items.go_api.title')}
          description={t('projects.items.go_api.description')}
          tags={["Go", "Gin", "PostgreSQL", "Docker"]}
          githubUrl="https://github.com/gustavomsb"
        />
        <ProjectCard
          title={t('projects.items.dashboard.title')}
          description={t('projects.items.dashboard.description')}
          tags={["React", "Recharts", "Redux"]}
          previewUrl="https://github.com/gustavomsb"
        />
      </div>
    </Container>
  );
}
