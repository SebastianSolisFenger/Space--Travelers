import MissionsPage from './Pages/MissionsPage';
import MyProfile from './Pages/MyProfile';
import RocketsPage from './Pages/RocketsPage';

const routes = [
  {
    id: 0,
    path: '/',
    title: 'Rockets',
    element: <RocketsPage />,
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
    element: <MyProfile />,
  },
];

export default routes;
