import React from 'react'
import { connect } from 'react-redux'
import * as MovieActions from '../actions/movieAction';

// Componentes Funcionais (sem state, não há necessidade de classe)
// const Sidebar = ({ categories, selectMovie }) => ( // o parâmetro da função são as props
//   <aside>
//     {
//       ...
//     }
//   </aside>
// )

class Sidebar extends React.Component {
  render() {
    const { categories, selectMovie } = this.props;

    return (
      <aside>
        {
          categories.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>{movie.title} was released in {movie.released}<button onClick={() => selectMovie(category, movie)}>Select</button></li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
}

// mapStateToProps -> faz o papel do subscribe no Redux RAIZAO
// e no React faz o papel do render()
const mapStateToProps = (state) => ({ // é executada sempre que a store é alterada
  categories: state.movieReducer.categories
}) // o objeto retornado é uma props acessível no componente sideBar

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(MovieActions.selectMovie(category, movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

// Currying:
// function a(a){
//   return function b(b){
//     return function c(c){
//       return a + b + c
//     }
//   }
// }

// a(1)(2)(3) = 6
