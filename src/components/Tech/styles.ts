import styled from "styled-components";

interface ContainerProps {
    $hoverColor?: string;
}

export const Container = styled.div<ContainerProps>`
    background: ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'};
    border: 1px solid ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    margin-bottom: 1.5rem;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    color: ${({ theme }) => theme.colors.text};

    .bg-tech {
        background: ${({ theme }) => theme.colors.background === '#09090b' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
        color: ${({ theme }) => theme.colors.title};
        border-radius: 12px;
        padding: 0.5rem;
        transition: all 0.4s ease;
    }

    &:hover {
        transform: translateY(-8px) scale(1.02);
        color: ${({ theme }) => theme.colors.title};
        border: 1px solid ${({ theme, $hoverColor }) => $hoverColor || theme.colors.secondary};
        box-shadow: 0 10px 40px ${({ theme, $hoverColor }) => ($hoverColor || theme.colors.secondary)}33;

        .bg-tech {
            background: ${({ theme, $hoverColor }) => $hoverColor || theme.colors.secondary};
            color: ${({ theme }) => theme.colors.backgroundPages};
            transform: scale(1.1) rotate(5deg);
        }
    }

    h3 {
        margin: 0;
        font-weight: 500;
        font-size: 1.1rem;
    }
`;