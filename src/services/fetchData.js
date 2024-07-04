import React from "react";

const fetchReducer = (state, { type, payload }) => {
  switch (type) {
    case "Success":
      return {
        data: getShuffledArray([...payload]),
        isLoading: false,
        isError: false,
      };
    case "Error":
      return { data: [], isLoading: false, isError: true };
    case "Loading":
      return { data: [], isLoading: true, isError: false };
    default:
      return;
  }
};

function useFetchAsync_Then(url) {
  const [fetchState, dispatch] = React.useReducer(fetchReducer, {
    data: [],
    isLoading: true,
    isError: false,
  });

  React.useEffect(() => {
    dispatch({ type: "Loading" });
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });
        if (res.status === 200) return await res.json();
        else return Promise.reject("err");
      } catch (err) {
        return Promise.reject(err);
      }
    };

    fetchData()
      .then((successData) => {
        dispatch({ type: "Success", payload: successData });
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        dispatch({ type: "Error" });
      });

    return () => controller.abort();
  }, [url]);

  return fetchState;
}

function getShuffledArray(arr) {
  const inputArr = JSON.parse(JSON.stringify(arr));
  for (let i = inputArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]];
  }
  return inputArr;
}

export default useFetchAsync_Then;
