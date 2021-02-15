import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {
  render() {
    const { category, movie } = this.props;

    return (
      <div>
        <h1>Filme: { movie.title }</h1>
        <h3>Categoria: { category.name }</h3>
        {' '}
        -
        {' '}
        <h3>Ano: { movie.released }</h3>
        <section>
          <iframe
            title="trailer"
            width="420"
            height="315"
            src={ movie.link }
          />  
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.movieReducer.selectedCategory,
  movie: state.movieReducer.selectedMovie,
});

export default connect(mapStateToProps, null)(Player)
