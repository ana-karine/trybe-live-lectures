import React from 'react';
import { connect } from 'react-redux';
import getAPI from './services/requestAPI';
import { updateMeme } from './redux/actions/actions';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }

  componentDidMount() {
    // fetch('https://api.imgflip.com/get_memes')
    // .then(response => console.log(response))

    // fetch('https://api.imgflip.com/get_memes')
    // .then(response => response.json())
    // .then(response => response.data.memes)
    // .then(response => this.props.updateMemes(response))

    this.props.updateMemes(getAPI());
  }

  render() {
    const { index } = this.state;
    const { memes } = this.props;

    return (
      <div className="App">
        <h1>Gerador de memes</h1>
        <button
          onClick={ () => this.setState({ index: index + 1 }) }
        >
          Próximo
        </button>
        <div>
          { memes.length > 0 ? <img src={ memes[index].url } /> : null }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  memes: state.memes,
})

const mapDispatchToProps = (dispatch) => ({
  // updateMemes: (arrayMemes) => dispatch({type:'UPDATE', data: arrayMemes}),
  updateMemes: (dataAPI) => dispatch(updateMeme(dataAPI)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
