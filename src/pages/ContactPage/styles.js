import styled, { css } from "styled-components";

export const ContactPageStyles = styled.div`
  display: grid;
  grid-template-columns: 3fr 9fr;
  gap: 24px;
  margin-top: 48px;
  margin-bottom: 48px;
  align-items: start;
`;

export const InfoSidebar = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 20px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(from var(--gray-9) r g b / 0.05);
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;

  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--green-gray-half);
    color: var(--primary);
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font: var(--body-medium-400);
    color: var(--gray-8);
    margin: 4px 0;
  }
`;

export const FormSection = styled.section`
  padding: 48px;
  border-radius: 8px;
  background-color: var(--white);
  box-shadow: 0px 0px 20px rgba(from var(--gray-9) r g b / 0.05);

  h2 {
    font: var(--body-xxl-600);
    color: var(--gray-9);
    margin-bottom: 8px;
  }

  & > p {
    font: var(--body-small-400);
    color: var(--gray-5);
    margin-bottom: 24px;
    max-width: 486px;
  }
`;

export const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--gray-1);

  iframe,
  img {
    width: 100%;
    height: 100%;
    border: none;
    object-fit: cover;
  }
`;
