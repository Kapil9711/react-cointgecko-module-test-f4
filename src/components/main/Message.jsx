import styled from "styled-components";

const StyledMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`;

const Message = ({ isLoading, isError }) => {
  return (
    <StyledMessage>
      {isLoading && <h1>Loading...</h1>}
      {isError && <h1>Error in fetching data...</h1>}
    </StyledMessage>
  );
};

export default Message;
