import { GET_DATA, SET_ERROR, SET_KEYWORD, SET_RESULT } from "../types";

const DataReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload, loading: false };
    case SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    case SET_KEYWORD:
      return { ...state, keyword: action.payload };
    case SET_RESULT:
      return { ...state, result: action.payload };

    default:
      break;
  }
};

export default DataReducer;
