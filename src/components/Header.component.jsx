import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  gap: 16px;

  //styling nested components

  input {
    border: 2px solid white;
    background-color: transparent;
    border-radius: none;
    height: 50px;
    color: white;
    padding-inline: 16px;
    font-size: 20px;

    &::placeholder {
      color: rgb(220, 214, 214);
    }

    &:focus {
      border-radius: none;
      outline: none;
    }
  }

  button {
    background-color: transparent;
    border: 2px solid white;
    font-size: 18px;
    color: white;

    &:hover {
      background-color: white;
      color: black;
    }

    &.active {
      background-color: rgb(167, 240, 130);
      color: black;
    }
  }
`;

const Header = ({ sortInputs, setSortInputs }) => {
  const { searchInput, sortByMktCap, sortByPercentage } = sortInputs;
  return (
    <StyledHeader>
      <input
        id="searchInput"
        value={searchInput}
        onChange={(e) =>
          handleInput(e.target.id, e.target.value, setSortInputs)
        }
        type="text"
        placeholder="Search By Name or Symbol"
      />
      <button
        className={sortByMktCap ? "active" : ""}
        id="sortByMktCap"
        onClick={(e) => handleInput(e.target.id, !sortByMktCap, setSortInputs)}
      >
        Sort By Mkt Cap
      </button>
      <button
        className={sortByPercentage ? "active" : ""}
        id="sortByPercentage"
        onClick={(e) =>
          handleInput(e.target.id, !sortByPercentage, setSortInputs)
        }
      >
        Sort by percentage
      </button>
    </StyledHeader>
  );
};

const handleInput = (id, value, setSortInputs) => {
  if (id === "searchInput") setSortInputs((prev) => ({ ...prev, [id]: value }));
  if (id === "sortByMktCap")
    setSortInputs((prev) => ({
      ...prev,
      [id]: value,
      sortByPercentage: false,
    }));
  if (id === "sortByPercentage")
    setSortInputs((prev) => ({ ...prev, [id]: value, sortByMktCap: false }));
};

export default Header;
