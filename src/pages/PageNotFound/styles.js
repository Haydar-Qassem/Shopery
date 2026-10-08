import styled from "styled-components";

export const PageNotFoundStyles = styled.div`
  margin-block: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 612px;

  img {
    width: 100%;
    object-fit: cover;
  }

  h2 {
    font: var(--heading-3-600);
  }

  p {
    font: var(--body-medium-400);
    color: var(--gray-5);
    text-align: center;
  }

  button {
    width: fit-content;
  }
`;
