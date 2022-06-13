import Missions from './components/Missions';
import MyProfile from './Pages/MyProfile';
import AllRockets from './components/AllRockets';

const routes = [
  {
    id: 0,
    path: '/',
    title: 'Rockets',
    element: <AllRockets />,
  },
  {
    id: 1,
    path: '/missions',
    title: 'Missions',
    element: <Missions />,
  },
  {
    id: 2,
    path: '/profile',
    title: 'MyProfile',
    element: <MyProfile />,
  },
];

export default routes;
