import React, { Component } from "react";
import moviesApi from "../../helpers/movies-api.js";
import "./Cast.css"

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    moviesApi
      .fetchCast(this.props.match.params.movieId)     
      .then((response) => this.setState({ cast: response.cast }));
  }

  render() {    
    const cast = this.state.cast;
    return (
      <>
        {cast && (
          <ul className="cast-list">
            {cast.map((actor) => (
              <li className="cast-list_item" key={actor.id}>
                {actor.profile_path && (
                  <img
                    className="cast_img"
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={`${actor.name}`}
                  />
                )}
                <h3>{actor.name}</h3>
                <p>Character: {actor.character}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
