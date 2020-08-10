import React, { Component } from "react";
import getQueryParams from "../../utils/getQueryStringParams.js";
import MoviesList from "../../components/MoviesList/MoviesList.js";
import movieApi from "../../helpers/movies-api.js";
import "./Movies.css";

class Movies extends Component {
  state = {
    value: "",
    searchList: [],
  };

  componentDidMount() {
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      this.fetchSearchList(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchSearchList(nextQuery);
    }
  }

  fetchSearchList = (query) => {
    movieApi
      .fetchMovies(query)
      .then((response) => this.setState({ searchList: response.results }));
  };

  handleChange = (event) => {
    const inputValue = event.target.value;
    this.setState({
      value: inputValue,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value) {
      this.handleQuery(this.state.value);
      this.setState({ value: "" });
      return;
    }
    alert("input movie name");
  };

  handleQuery = (query) => {
    this.props.history.push({
      // pathname: this.props.location.pathname,
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { searchList, value } = this.state;
    const props = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit} className="search-form">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <MoviesList value={value} trendings={searchList} props={props} />
      </>
    );
  }
}

export default Movies;
