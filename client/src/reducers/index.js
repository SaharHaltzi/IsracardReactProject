import {combineReducers} from "redux";
import gitHubReducer from './gitHubReducer';
import bookmarksReducer from './bookmarksReducer';

export default combineReducers({
  github: gitHubReducer,
  bookmarks: bookmarksReducer
});