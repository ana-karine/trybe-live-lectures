import React from 'react';
import './App.css';
import data from './data.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      number: 10
    }
  }

  changeNumber = () => {
    this.setState((state) => ({number: state.number + 100}))
  }

  setFilterValue = event => {
    console.log(event.target.value);
    this.setState({
      filter: event.target.value
    })
  };
  
  render() {

    return (
      <div className="App">
        <div>
          <input onChange={this.setFilterValue} type="text" />
        </div>
        {data
          .filter(element => element.color.includes(this.state.filter))
          .map(({color, value}) => {
        return(
          <li key={value}>
            {color} coded as {value}
          </li>)
        })}
        <p>{this.state.number}</p>
        <button onClick={this.changeNumber}>clique aqui</button>
      </div>
    );
  }
}

export default App;
