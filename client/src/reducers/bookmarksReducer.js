import {GET_BOOKMARKS, SET_BOOKMARK} from '../actions/types';

const INITIAL_STATE = {
  bookmarks: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_BOOKMARKS:
      return {...state, bookmarks: action.payload.bookmarks};
    case SET_BOOKMARK:
      return {...state, bookmarks: [...state.bookmarks, action.payload.bookmark]};
    default:
      return state;
  }
};