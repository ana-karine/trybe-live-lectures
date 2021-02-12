import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchISSLocation } from '../actions';

import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

// Sempre que o componente é montado (por isso o uso do 'componentDidMount'),
// a 'action' que faz a chamada para a API (que seta o novo estado) é chamada.
// Para isso, é retirada das props a função ('getCurrentISSLocation') que faz
// o 'dispatch' da mesma. Em seguida, essa função é chamada.
class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;

    this.timer = setInterval(
      getCurrentISSLocation,
      2000
    );
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    const {
      error,
      isFetching,
      latitude,
      longitude
    } = this.props;

    const isLocationPresent = latitude && longitude;

    return (
      <div>
        <div className="map">
          <Map
            center={[0, 0]}
            defaultWidth={700}
            height={450}
            minZoom={1}
            maxZoom={8}
            zoom={1}
          >
            {!isFetching && isLocationPresent && <Marker anchor={[latitude, longitude]} />}
          </Map>
          {/* se 'isFetching' é true, aparece a mensagem 'Loading...' */}
          {isFetching && 'Loading...'}
          {!isFetching && isLocationPresent && `Location: ${latitude}, ${longitude}`}
          {!isFetching && error.message}
        </div>
      </div>
    );
  }
}

// Mapeia tudo que está no estado como props para 
// error, isFetching, latitude e longitude:
const mapStateToProps = (state) => (
  {
    // 'issLocation' do 'reducer'
    error: state.issLocation.error,
    isFetching: state.issLocation.isFetching,
    latitude: state.issLocation.latitude,
    longitude: state.issLocation.longitude,
  }
);

// Cria a função 'getCurrentISSLocation' que dispara a
// action 'fetchISSLocation' para a store:
const mapDispatchToProps = (dispatch) => ({
  getCurrentISSLocation: () => dispatch(fetchISSLocation()),
});

// Conecta o componente ISSLocation na store e permite utilizar
// mapStateToProps e mapDispatchToProps no mesmo:
export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
