import React, { Component } from "react";
import moviesApi from "../../helpers/movies-api.js";
import MoviesList from "../../components/MoviesList/MoviesList.js";
import "./Home.css";

class Home extends Component {
  state = {
    trendings: [],
    loader: true,
    error: false,
  };

  componentDidMount() {
    moviesApi
      .fetchTrending("week")
      .then((response) => this.setState({ trendings: response.results }));
  }
  render() {
    const props = this.props;
    const { trendings } = this.state;
    return <MoviesList trendings={trendings} props={props} />;
  }
}

export default Home;
