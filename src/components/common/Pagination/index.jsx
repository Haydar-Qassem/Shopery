import { StyledPaginate } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Pagination({ totalPages, onPageChange }) {
  return (
    <StyledPaginate
      pageCount={totalPages}
      onPageChange={(e) => onPageChange(e.selected + 1)}
      previousLabel={<FiChevronLeft />}
      nextLabel={<FiChevronRight />}
      breakLabel="..."
      activeClassName="selected"
      disabledClassName="disabled"
    />
  );
}

export default Pagination;
