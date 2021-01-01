import React from 'react';

class Futebol extends React.Component {
  constructor(props) {
    super(props)
    this.chute = this.chute.bind(this);
  }

  chute(mensagem) {
    alert(mensagem);
  }

  render() {
    return(
      <button onClick={() => this.chute('Gol!')}>Dê um chute!</button>
    )
  }
}

export default Futebol;