import MissionsPage from './Pages/MissionsPage';

const routes = [
  {
    id: 0,
    path: '/',
    title: 'Rockets',
  },
  {
    id: 1,
    path: '/missions',
    title: 'Missions',
    element: <MissionsPage />,
  },
  {
    id: 2,
    path: '/profile',
    title: 'MyProfile',
  },
];

export default routes;
