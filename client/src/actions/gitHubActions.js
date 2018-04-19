import {GET_GITHUB_REPO, SET_BOOKMARK} from './types'
import axios from 'axios';

const getGithubRepositoriesUrl = 'http://localhost:64187/api/repositories/GetRepositories?input=';

export const getRepositoryDataFromGitHub = repository => {
  return dispatch => {
    axios.get(getGithubRepositoriesUrl + encodeURIComponent(repository)).then(result => {
      dispatch({
        type: GET_GITHUB_REPO,
        payload: {
          repositories: result.data
        }
      })
    });
  }
};

const setBookmarkUrl = 'http://localhost:64187/api/BookmarkRepository/SetAsBookmark';

export const setAsBookmark = repository => {
  return dispatch => {
    axios(setBookmarkUrl, {
      method: 'post',
      data: repository,
      withCredentials: true
    })
      .then(result => {
        dispatch({
          type: SET_BOOKMARK,
          payload: {
            bookmark: repository
          }
        });
      });
  }
};