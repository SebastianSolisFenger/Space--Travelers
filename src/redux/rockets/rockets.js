const GET_ROCKETS = './space-travelers/rockets/GET_ROCKETS';
const ADD_RESERVATION = './space-travelers/rockets/ADD_RESERVATION';
const DELETE_RESERVATION = './space-travelers/rockets/DELETE_RESERVATION';

// const url = 'https://api.spacexdata.com/v3/rockets';
const initialState = [];

export const addReservation = (payload) => ({ type: ADD_RESERVATION, payload });
export const getRockets = (payload) => ({ type: GET_ROCKETS, payload });
export const deleteReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const getRocketList = () => async (dispatch) => {
  const rocketList = await fetch(`{url}`).then((resp) => resp.json());
  const infoArr = [];
  rocketList.map((rocket) =>
    infoArr.push({
      id: rocket.id,
      desc: rocket.description,
      name: rocket.name,
      img: rocket.flickr_images[0],
    })
  );
  dispatch(getRockets(infoArr));
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    case DELETE_RESERVATION:
      return state.filter((rocket) => rocket.id !== action.payload.id);
    default:
      return state;
  }
};

export default rocketsReducer;
