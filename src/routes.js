import Home from './pages/Home';
import Data from './pages/Data';
// import Register from './pages/Register';

export default [
  {
    exact: true,
    path: '/',
    component: Home,
  }, {
    path: '/data',
    component: Data
  }
];