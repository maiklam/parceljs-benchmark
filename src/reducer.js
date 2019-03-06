import article from './reducers/article';
import articleList from './reducers/articleList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import { routerReducer } from 'react-router-redux';
import test from './reducers/test';

export default combineReducers({
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  test,
  router: routerReducer
});
