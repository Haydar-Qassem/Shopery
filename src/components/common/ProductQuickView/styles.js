// styles.js
import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalCard = styled.div`
  position: relative;
  background: var(--white);
  border-radius: 8px;
  width: 90%;
  max-width: 1320px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 32px;
  padding: 32px;

  .modal-close {
    position: absolute;
    top: -53px;
    right: 0;
    color: var(--white);
  }
`;

export const ModalGallery = styled.div`
  display: flex;
  gap: 12px;

  .main-image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;

export const ThumbnailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  img {
    width: 80px;
    /* height: 64px; */
    object-fit: cover;
    border-radius: 2px;
    cursor: pointer;

    &.active {
      border: 1px solid var(--primary);
    }
  }
`;

export const ModalDetails = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 24px; */

  .overview-row {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;

    h2 {
      font: var(--heading-4-600);
      display: inline-block;
    }
  }
  & > div:not(:first-child) {
    padding-block: 18px;
  }
  & > div:first-child {
    padding-block-end: 18px;
  }
  & > div:not(:last-child) {
    border-bottom: 1px solid var(--gray-1);
  }
`;

export const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* padding-block: 18px; */
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
