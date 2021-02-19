import React from 'react';
import './App.css';
import data from './data.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      inputTextValue: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({
      inputTextValue: event.target.value,
    })
  };
  
  render() {
    const { inputTextValue } = this.state;
    return (
      <main>
        <input onChange={ this.handleChange } type="text" />
        <ul>
          {
            data
              .filter((element) => element.color.includes(inputTextValue))
              .map((element) => 
                <li key={ element.value }>
                  <div
                    style={{ backgroundColor: element.value }}
                    className="color-square"
                  />
                  { ` ` + element.color }
                </li>
              )
          }
        </ul>
      </main>
    );
  }
}

export default App;
