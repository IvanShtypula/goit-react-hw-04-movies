import React, { Component } from "react";
import moviesApi from "../../helpers/movies-api.js";
import "./SingleMovie.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Cast from "../Cast/Cast.js";
import Reviews from "../Reviews/Reviews.js";

class SingleMovie extends Component {
  state = {
    show: null,
    genres: "",
    from: "",
    search: "",
    pathname: "",
  };

  componentDidMount() {
    moviesApi
      .fetchSingleMovie(this.props.match.params.movieId)
      .then((show) =>
        this.setState({ show, from: this.props.location.state.from })
      );
  }

  handleGoBack = () => {
    this.props.history.push({
      pathname: this.state.from.pathname,
      search: this.state.from.search,
    });
  };

  render() {
    const { show } = this.state;
    const { path, url } = this.props.match;
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>
          Ha3aD!!!
        </button>
        {show && (
          <div className="movie-description">
            <img
              className="movie-description_img"
              src={`https://image.tmdb.org/t/p/w200${show.poster_path}`}
              alt={`${show.title}`}
            />
            <div className="movie-description_overview">
              <h2>{`${show.title} (${show.release_date.substr(0, 4)})`}</h2>
              <p>{`User Score: ${Math.round(show.popularity)}%`}</p>
              <h3>Overview</h3>
              <p>{show.overview}</p>
              <h3>Genres</h3>
              <ul className="genres-list">
                {show.genres.map((genre) => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <>
          <ul className="sub-menu">
            <li className="sub-menu_item">
              <NavLink to={`${url}/cast`} className="sub-menu_link">
                Cast
              </NavLink>
            </li>
            <li className="sub-menu_item">
              <NavLink to={`${url}/reviews`} className="sub-menu_link">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route path={`${path}/cast`} component={Cast} />
            <Route path={`${path}/reviews`} component={Reviews} />
          </Switch>
        </>
      </>
    );
  }
}

export default SingleMovie;
