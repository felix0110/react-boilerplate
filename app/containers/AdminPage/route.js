import Dashboard from 'containers/AdminPage/Dashboard';
import UserTable from 'containers/AdminPage/Page/UserTable';

const ROUTES = [
  {
    path: '/',
    key: 'DASHBOARD',
    exact: true,
    component: Dashboard,
    isWithHandF: true,
  },
  {
    path: '/admin/user',
    key: 'USER',
    exact: true,
    component: UserTable,
    isWithHandF: false,
  },
];

export default ROUTES;
