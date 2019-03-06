import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import Dashboard from './components/Dashboard'
import Wizard from './components/Wizard'
import Cards from './components/Cards'
import Main from './components/Main'
import Signup from './components/Signup'
import ScrollToTop from './components/ScrollTop'

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/app" component={App} />
        <Route exact path='/' component={ Main } />
        <Route exact path='/dashboard' component={ Dashboard } />
        <Route exact path='/signup' component={ Signup } />
        <Route exact path='/wizard' component={ Wizard } />
        <Route exact path='/cards' component={ Cards } />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
