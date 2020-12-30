import React from 'react';
import VideoGame from './VideoGame';
import PropTypes from 'prop-types';

class VideoGameList extends React.Component {
  render() {
    const { games } = this.props;
    return (
      <div className="video-game-list">
        {games.map((xablau2, index) => <VideoGame key={index} game={xablau2} />)}
      </div>
    )
  }
}

export default VideoGameList;

VideoGameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    developer: PropTypes.string,
    sales: PropTypes.number
  }))
}

VideoGameList.defaultProps = {
  games: []
}