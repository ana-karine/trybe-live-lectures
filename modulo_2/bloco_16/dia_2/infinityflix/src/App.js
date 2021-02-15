import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import './index.css';
// import categories from './data';


class App extends React.Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     categories: [...categories]
  //   }
  // }

  render() {
    /* const { categories } = this.state */
    return (
      <Provider store={ store }>
        <Header />
        <main className="main">
          <Player />
          <Sidebar />
        </main>
      </Provider>
    );
  }
};

export default App;
