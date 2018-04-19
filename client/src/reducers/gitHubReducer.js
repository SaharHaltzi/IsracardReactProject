import {GET_GITHUB_REPO} from '../actions/types';

const INITIAL_STATE ={
  repositories: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_GITHUB_REPO:
      return {...state, repositories: action.payload.repositories};
    default:
      return state;
  }
};