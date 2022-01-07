import { createContext, useReducer } from "react";
import DataReducer from "./DataReducer";
import { GET_DATA, SET_ERROR, SET_KEYWORD, SET_RESULT } from "../types";
import axios from "axios";
export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  //Initial State
  const initialState = {
    data: null,
    loading: false,
    error: null,
    keyword: null,
    result: null,
  };

  const [state, dispatch] = useReducer(DataReducer, initialState);

  //Fetch mock data from json-server
  const fetchData = async () => {
    try {
      const data = await axios.get("http://localhost:3001/data");

      let convertedData = [];
      //Convert Array of arrays data to array of objects
      data.data.data.map((data) => {
        convertedData.push({
          name: data[0],
          company: data[1],
          email: data[2],
          date: data[3],
          country: data[4],
          city: data[5],
        });
      });
      dispatch({ type: GET_DATA, payload: convertedData });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.message });
    }
  };
  //Set Search Keyword
  const setKeyword = (keyword) => {
    dispatch({ type: SET_KEYWORD, payload: keyword });
  };
  //Set Search Result
  const setResult = (resultArray) => {
    dispatch({ type: SET_RESULT, payload: resultArray });
  };
  //Sort data
  const sortData = (sortFilter) => {
    let sortedData = [];

    switch (sortFilter) {
      case 0: //Asc Name
        sortedData = state.data.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

        break;
      case 1: //Desc Name
        sortedData = state.data
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .reverse();
        break;
      case 2: //Asc Date
        sortedData = state.data.sort((a, b) => {
          return parseStringDateToDate(a.date) - parseStringDateToDate(b.date);
        });
        break;
      case 3:
        sortedData = state.data
          .sort((a, b) => {
            return (
              parseStringDateToDate(a.date) - parseStringDateToDate(b.date)
            );
          })
          .reverse();
        break;
      default:
        break;
    }

    dispatch({ type: SET_RESULT, payload: sortedData });
  };

  const parseStringDateToDate = (dateString) => {
    var dateParts = dateString.split("/");

    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    return dateObject;
  };
  //Return provider with state values and necessary functions
  return (
    <DataContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        error: state.error,
        keyword: state.keyword,
        result: state.result,
        fetchData,
        setKeyword,
        setResult,
        sortData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
