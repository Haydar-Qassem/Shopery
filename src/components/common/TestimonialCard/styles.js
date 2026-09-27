import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  width: 424px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(from var(--gray-7) r g b / 0.08);
`;

export const QuoteIconWrapper = styled.div`
  font-size: 32px;
  width: 32px;
  height: 26px;
  color: rgba(from var(--primary) r g b / 0.2);
`;

export const QuoteText = styled.p`
  font: var(--body-medium-400);
  color: var(--gray-7);
  /* line-height: 1.6; */
  margin: 0;
  flex-grow: 1;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 999px;
  object-fit: contain;
`;

export const ProfileText = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 4px; */
`;

export const Name = styled.h4`
  font: var(--body-medium-500);
  color: var(--gray-9);
  /* margin: 0; */
`;

export const Role = styled.span`
  font: var(--body-small-400);
  color: var(--gray-4);
`;
