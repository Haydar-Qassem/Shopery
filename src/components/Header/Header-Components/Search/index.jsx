import { SearchStyles, SearchButtonStyles } from "./styles";
import searchIcon from "../../../../assets/images/Search.svg";
import { useState } from "react";

function Search() {
  const [searchValue, setSearchValue] = useState("Search");

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex" }}>
      <SearchStyles>
        <button
          type="submit"
          style={{
            cursor: "pointer",
            background: "transparent",
            border: "none",
            padding: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={searchIcon} alt="search icon" />
        </button>
        <input
          style={{
            color: "var(--gray-5)",
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "21px",
            border: "none",
            outline: "none",
          }}
          onChange={() => setSearchValue("Search")}
          placeholder="Search"
        />
      </SearchStyles>
      <SearchButtonStyles type="submit">Search</SearchButtonStyles>
    </form>
  );
}

export default Search;
