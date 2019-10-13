import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route } from 'react-router-dom';
import Navigation from './common/Navigation';
import Login from './pages/Login';
import Register from './pages/Register';
import routes from './routes';
import configureStore, { history } from './store';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Navigation />
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} {...route} />
          })}
          <Route path="/login" render={() => <Login />} />
          <Route path="/register" render={() => <Register />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
