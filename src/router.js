import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Data from './pages/Data';

export default [
  {
    exact: true,
    path: '/',
    component: Home
  }, {
    path: '/register',
    component: Register
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/data',
    component: Data
  }
];