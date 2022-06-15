import React, { Component } from "react";
import { connect } from "react-redux";
import { selectMovie } from "./Actions/index";

class MovieList extends Component {
    renderMovies = () => {
        return this.props.myMovies.map((movie, index) => {
            return (
              <div key={index}>
                <p>{movie.title}</p>
                {/* <p>{movie.year}</p>
                <p>{movie.lead}</p> */}
                <button onClick={()=>{this.props.selectMovie(movie)}}>view</button>
              </div>
            );
          })
    }
  render() {
    return (
      <div>
        {this.renderMovies()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { myMovies: state.movies };
};

export default connect(mapStateToProps, {selectMovie})(MovieList);
