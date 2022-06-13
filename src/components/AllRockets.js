import React, { Component } from 'react';
import Rocket from './Rocket';
import './AllRockets.css';

class AllRockets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rockets: [{
        id: 1,
        rocket_name: 'Rocket1',
        description: 'descript 1',
        flickr_images: 'https://img1.jpg',
      },
      {
        id: 2,
        rocket_name: 'Rocket2',
        description: 'descript 2',
        flickr_images: 'https://img2.jpg',
      },
      {
        id: 3,
        rocket_name: 'Rocket3',
        description: 'descript 3',
        flickr_images: 'https://img3.jpg',
      }],
    };
  }

  render() {
    const { rockets } = this.state;
    return (
      rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          id={rocket.id}
          name={rocket.rocket_name}
          img={rocket.flickr_images}
          desc={rocket.description}
        />
      ))
    );
  }
}

export default AllRockets;
