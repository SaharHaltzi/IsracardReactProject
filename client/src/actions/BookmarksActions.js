import {GET_BOOKMARKS} from './types';
import axios from 'axios';

const url = 'http://localhost:64187/api/BookmarkRepository/GetUserBookmarks';

export const getBookmarksUser = () => {
  return(dispatch) => {
    debugger
    axios({url,method:"GET",withCredentials: true}).then(result => {
      dispatch({
        type: GET_BOOKMARKS,
        payload:{
          bookmarks : result.data
        }
      });
    });
  };
};