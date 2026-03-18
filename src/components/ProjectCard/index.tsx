import { Container, Content, ImageContainer, Tags, Links } from './styles';
import { AiOutlineGithub, AiOutlineLink } from 'react-icons/ai';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  previewUrl?: string;
  imageUrl?: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  previewUrl,
  imageUrl
}: ProjectCardProps) {
  return (
    <Container>
      {imageUrl && (
        <ImageContainer>
          <img src={imageUrl} alt={`Preview do projeto ${title}`} />
        </ImageContainer>
      )}
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
        <Tags>
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </Tags>
        <Links>
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <AiOutlineGithub size={20} /> Código API/Web
            </a>
          )}
          {previewUrl && (
            <a href={previewUrl} target="_blank" rel="noreferrer">
              <AiOutlineLink size={20} /> Ver Projeto
            </a>
          )}
        </Links>
      </Content>
    </Container>
  );
}
