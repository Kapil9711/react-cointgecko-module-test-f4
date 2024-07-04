import React from "react";
import "./Global-Styles.scss";
import getfilteredData from "./services/filterData";
import useFetchAsync_Then from "./services/fetchData";
import Header from "./components/Header.component";
import Main from "./components/main/Main.component";
import API_URL from "./services/api";

const App = () => {
  const { data, isLoading, isError } = useFetchAsync_Then(API_URL);
  const [sortInputs, setSortInputs] = React.useState({
    searchInput: "",
    sortByMktCap: false,
    sortByPercentage: false,
  });
  const filteredData = getfilteredData(data, sortInputs);

  return (
    <>
      <Header {...{ sortInputs, setSortInputs }} />
      <Main {...{ filteredData, isLoading, isError }} />
    </>
  );
};

export default App;
