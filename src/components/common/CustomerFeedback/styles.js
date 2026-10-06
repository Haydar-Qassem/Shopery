import styled, { css } from "styled-components";

export const CustomerFeedbackStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FeedbackHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  border-radius: 999px;
  background-color: var(--gray-1);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Timestamp = styled.span`
  font: var(--body-small-400);
  color: var(--gray-4);
`;

export const ReviewText = styled.p`
  font: var(--body-small-400);
  color: var(--gray-5);
`;
