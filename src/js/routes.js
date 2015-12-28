import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Main from './components/Main'
import BrowserView from './components/containers/BrowserView'
import FavoriteView from './components/containers/FavoriteView'
import QuestionView from './components/containers/QuestionView'
import QuestionDetail from './components/questions/QuestionDetail'


const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={BrowserView} />
    <Route path="questions" component={BrowserView} >
      <Route path="tag/:tag" component={QuestionView} />
      <Route path="detail/:id" component={QuestionDetail} />
    </Route>
    <Route path="favorite" component={FavoriteView} />
  </Route>
);

export default routes;
