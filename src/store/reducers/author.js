import * as actionTypes from "../actions/actionTypes";

const initialState = {
  author: null,
  books: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_AUTHOR_DETAIL:
      return {
        ...state,
        author: action.payload,
        loading: false
      };

    case actionTypes.SET_AUTHOR_LOADING:
      return {
        ...state,
        loading: true
      };

    case actionTypes.POST_BOOK:
      //UPDATE THE STATE ACCORDINGLY
      return {
        ...state,
        author: {
          ...state,
          books: state.author.books.concat(action.payload)
        },
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;
