import React, { Component } from 'react';
import moviesApi from "../../helpers/movies-api.js";
import "./Reviews.css"

class Reviews extends Component {
  state = {
    results: [],   
  };

  componentDidMount() {    
    moviesApi
      .fetchReviews(this.props.match.params.movieId)     
      .then((reviews) => this.setState({ results: reviews.results }));
  }
  render() {    
    const results = this.state.results;
    return (
      <>
          {results && (
          <ul className="results-list">
            {results.map((result) => (
              <li className="results-list_item" key={result.id}>               
                <h3>Author: {result.author}</h3>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Reviews;