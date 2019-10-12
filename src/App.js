import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './common/Navigation';
import Login from './pages/Login';
import Register from './pages/Register';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          const { component, ...rest } = route;
          return <Route key={index} {...rest} render={() => withNav(component)}/>
        })}
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
      </Switch>
    </BrowserRouter>
  );
}

function withNav(Component) {
  return (
    <>
      <Navigation />
      <Component />
    </>
  ) 
}

export default App;
