import styled, { css } from "styled-components";

export const AboutPageStyles = styled.div`
  /* margin: 24px; */
  display: flex;
  flex-direction: column;
  // gap: "20px",

  /* h2 {
    font: var(--heading-5-600);
    margin-block-end: 32px;
  } */

  section {
    /* margin-block: 32px; */
  }

  & > div {
    padding-block: 60px;
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  & > div:nth-child(odd) {
    background-color: var(--gray-half);
  }
`;

export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  /* max-width: 1320px; */
  /* width: 100%; */
  /* margin: 0 auto; */
  align-items: center;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font: var(--heading-2-600);
  color: var(--gray-9);
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font: var(--body-large-400);
  color: var(--gray-6);
  line-height: 1.6;
  margin-bottom: 32px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const IconCircle = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(from var(--primary) r g b / 0.1);
  color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const FeatureText = styled.span`
  font: var(--body-small-500, 500 14px "Poppins", sans-serif);
  color: var(--gray-9, #1a1a1a);
`;

export const BulletList = styled.ul`
  /* list-style: none; */
  /* padding: 0; */
  margin: 0 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BulletItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font: var(--body-medium-400);
  color: var(--gray-6);
`;

export const CheckIcon = styled.div`
  color: var(--primary);
  font-size: 20px;
  display: flex;
`;

export const PrimaryButton = styled.button`
  align-self: flex-start;
  background-color: var(--primary);
  color: var(--white);
  font: var(--body-medium-600);
  border: none;
  border-radius: 43px;
  padding: 14px 32px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background-color: var(--primary);
  }
`;
