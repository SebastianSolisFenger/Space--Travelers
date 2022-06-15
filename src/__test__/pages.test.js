import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsPage from '../pages/RocketsPage';
import MissionsPage from '../pages/MissionsPage';
import MyProfile from '../pages/MyProfile';

describe('Testing if all the pages render correctly', () => {
  it('Testing Rockets page (main one)', () => {
    const tree = render(
      <Provider store={store}>
        <RocketsPage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing if (Missions page) renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MissionsPage />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
  it('Testing if (My Profile Page) renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>
    );
    expect(tree).toMatchSnapshot();
  });
});
