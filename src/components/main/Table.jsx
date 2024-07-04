import TableData from "./TableData";
import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  td {
    text-align: right;
    font-size: 20px;
    padding-block: 24px;
    border-bottom: 1px solid white;
  }

  tr td:first-child {
    text-align: left;
    display: flex;
    align-items: center;
    gap: 16px;
    img {
      height: 30px;
      width: 30px;
    }
  }

  tr td:last-child {
    width: 270px;
  }

  td:nth-of-type(3) {
    width: 180px;
  }
  td:nth-of-type(5) {
    width: 120px;
    text-align: right;
  }
`;

const Table = ({ filteredData }) => {
  return (
    <StyledTable>
      <tbody>
        {filteredData.map((coin) => (
          <TableData key={coin.id} {...coin} />
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
