import React from 'react';
import './App.css';
import VideoGameList from './VideoGameList';
import Footer from './footer';
import xablau from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoGameList games={xablau} />
        <Footer title="Made during live lecture"/>
      </div>
  );
}
}

export default App;
