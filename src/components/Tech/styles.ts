import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid #fff;
    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    margin-bottom: 1rem;
    transition: color 0.5s, border 0.5s;

    .bg-tech {
        background: #fff;
        color: ${({ theme }) => theme.colors.backgroundPages};
        border-radius: 4px;

        transition: background 0.5s;

    }


    &:hover {
        color: ${({ theme }) => theme.colors.green};
        border: 1px solid ${({ theme }) => theme.colors.green};

        .bg-tech {
            background: ${({ theme }) => theme.colors.green};
        }
    }


    h1 {
        margin: 0;
    }
`;