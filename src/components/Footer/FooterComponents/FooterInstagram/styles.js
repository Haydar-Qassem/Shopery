import styled from "styled-components";

export const FooterInstagramStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 312px;

  a {
    transition: var(--transition);
  }

  a:hover {
    transform: scale(1.1);
  }

  .swiper {
    width: 100%;
    height: auto;
  }

  .swiper-slide {
    height: calc((100% - 10px) / 2) !important;
    margin-top: 10px;
  }
`;
