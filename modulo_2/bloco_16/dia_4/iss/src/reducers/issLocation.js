import {
  REQUEST_ISS_LOCATION,
  RECEIVE_ISS_LOCATION_SUCCESS,
  RECEIVE_ISS_LOCATION_FAILURE,
} from '../actions';

const INITIAL_ISS_LOCATION = {
  error: false,
  isFetching: false,
  latitude: null,
  longitude: null
}

const issLocation = (state = INITIAL_ISS_LOCATION, action) => {
  console.log('received action:', action);
  switch (action.type) {
    // enquanto está sendo feita a requisição
    case REQUEST_ISS_LOCATION:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_ISS_LOCATION_SUCCESS:
      return {
        ...state,
        latitude: action.latitude,
        longitude: action.longitude,
        isFetching: false
      };
    case RECEIVE_ISS_LOCATION_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      }
    default:
      return state;
  }
};

export default issLocation;
