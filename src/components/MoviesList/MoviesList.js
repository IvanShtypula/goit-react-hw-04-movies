import React from "react";
import { NavLink } from "react-router-dom";
import "./MoviesList.css";

const MoviesList = ({ trendings, props, value }) => {
  return (
    <>
      {trendings.length > 0 && (
        <ul className="movies-list">
          {trendings.map((trending) => (
            <li className="movies-list_item" key={trending.id}>
              <NavLink
                className="movies-list_item--link"
                to={{
                  pathname: `/movies/${trending.id}`,
                  state: { from: props.location, search: value },
                }}
              >
                {trending.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesList;
