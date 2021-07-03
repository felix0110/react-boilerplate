import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import SignInPage from 'containers/SigninPage/Loadable';
import AdminPage from 'containers/AdminPage/Loadable';

const ROUTES = [
  {
    path: '/',
    key: 'HOME',
    exact: true,
    component: HomePage,
    isWithHandF: true,
    isPrivate: true
  },
  {
    path: '/features',
    key: 'FEATURES',
    exact: true,
    component: FeaturePage,
    isWithHandF: true,
    isPrivate: false
  },
  {
    path: '/admin',
    key: 'ADMIN',
    component: AdminPage,
    exact: false,
    isWithHandF: false,
    isPrivate: false
  },
  {
    path: '/signin',
    key: 'SIGNIN',
    component: SignInPage,
    exact: false,
    isWithHandF: true,
    isPrivate: false
  },
];

export default ROUTES;
