import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <BrowserRouter>
      <div className="layout-container">
        <Switch>
          {router.map(route => {
            return <Route key={route.path} {...route} />
          })}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
