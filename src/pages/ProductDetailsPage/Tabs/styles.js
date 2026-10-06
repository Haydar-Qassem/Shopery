// styles.js
import styled, { keyframes } from "styled-components";

export const TabsContainer = styled.div`
  margin-top: 40px;
`;

export const TabList = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  border-bottom: 1px solid var(--gray-2);
  margin-bottom: 32px;
`;

export const Tab = styled.button`
  background: none;
  border: none;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => (props.$active ? "var(--gray-9)" : "var(--gray-5)")};
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${(props) =>
      props.$active ? "var(--primary)" : "transparent"};
    transition: var(--transition);
  }

  &:hover {
    color: var(--gray-9);
  }
`;

export const DescriptionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
`;

export const TextContent = styled.div`
  color: var(--gray-6);
  font: var(--body-small-400);

  p {
    margin-bottom: 16px;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 24px 0;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    color: var(--gray-7);
    font-size: 14px;

    svg {
      color: var(--primary);
      font-size: 18px;
    }
  }
`;

export const FeaturesRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  border: 1px solid var(--gray-1);
  border-radius: 6px;
  padding: 24px 20px;
`;

export const InfoTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: var(--gray-6);
  font: var(--body-small-400);
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 112px 1fr;
  align-items: center;
`;

export const InfoLabel = styled.span`
  color: var(--gray-9);
`;

export const InfoValue = styled.span`
  color: var(--gray-6);
`;

export const FeedbackContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  & > div:not(:last-of-type) {
    border-bottom: 1px solid var(--gray-2);
    padding-bottom: 20px;
  }
`;

export const LoadMoreBtn = styled.button`
  align-self: flex-start;
  background: transparent;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 10px 24px;
  border-radius: 999px;
  font: var(--body-small-600);
  cursor: pointer;
  margin-top: 16px;
  transition: var(--transition);

  &:hover {
    background: var(--primary);
    color: white;
  }
`;
