import { getCurrentISSLocation } from '../service/issAPI'

export const REQUEST_ISS_LOCATION = 'REQUEST_ISS_LOCATION';
export const RECEIVE_ISS_LOCATION_FAILURE = 'RECEIVE_ISS_LOCATION_FAILURE';
export const RECEIVE_ISS_LOCATION_SUCCESS = 'RECEIVE_ISS_LOCATION_SUCCESS';


// Action retorna objeto
const requestISSLocation = () => ({
  type: REQUEST_ISS_LOCATION
})

// Action retorna objeto
const receiveISSLocationFailure = (error) => ({
  type: RECEIVE_ISS_LOCATION_FAILURE,
  error,
})
// Action retorna objeto
const receiveISSLocationSuccess = ({ iss_position: { latitude, longitude } }) => ({
  type: RECEIVE_ISS_LOCATION_SUCCESS,
  latitude: parseFloat(latitude),
  longitude: parseFloat(longitude)
})


// Action Creator retorna função com o Thunk
export function fetchISSLocation() {
  // a 'action creator' recebe o método 'dispatch'
  return (dispatch) => {
    // o 'dispatch' envia a 'action' SÍNCRONA 'requestISSLocation' pro 'reducer'
    dispatch(requestISSLocation())

    // retorna a execução da chamada na API
    return getCurrentISSLocation()
      .then(
        // com os dados da API é feito o 'dispatch' da 'action' ASSÍNCRONA 'receiveISSLocationSuccess'
        (location) => dispatch(receiveISSLocationSuccess(location)),
        (error) => dispatch(receiveISSLocationFailure(error))
      )
  }
}


// {"iss_position": {"longitude": "-139.2462", "latitude": "-21.2295"}, "message": "success", "timestamp": 1594151341}

// Action Sincrono
//   |
//   |
// Reducer
//   |
//   |
// Store


// Action Assincrono
//   |
//   |
// Middleware Thunk
//   |
//   |
// Reducer
//   |
//   |
// Store
