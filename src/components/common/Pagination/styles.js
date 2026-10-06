import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledPaginate = styled(ReactPaginate)`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  padding: 0;

  li a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: var(--gray-7);
    transition: all 0.2s ease;
  }

  li.selected a {
    background-color: var(--primary);
    color: var(--white);
  }

  li a:hover:not(.selected) {
    background-color: var(--gray-half);
  }

  li.disabled a {
    color: var(--gray-3);
    cursor: not-allowed;
  }
`;
