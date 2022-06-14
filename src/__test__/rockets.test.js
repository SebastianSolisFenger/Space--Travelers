import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketsPage from '../pages/RocketsPage';

const rocketsArr = [
  {
    desc: 'Some random description',
    key: '1',
    id: '1',
    name: 'Space Traveler 1',
    img: 'https://whatever.com',
    reserv: false,
  },
];

describe('Test the Rockets Component renders correctly', () => {
  it('rockets section renders', () => {
    const { container } = render(
      <Provider store={store}>
        <RocketsPage key={rocketsArr[0].id} rocket={rocketsArr[0]} />
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });
});
