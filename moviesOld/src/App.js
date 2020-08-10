import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header/Header.js";
//
import "./App.css";

const Home = lazy(() => import("./containers/Home/Home.js"));
const Movies = lazy(() => import("./containers/Movies/Movies.js"));
const SingleMovie = lazy(() =>
  import("./components/SingleMovie/SingleMovie.js")
);

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<p>Та погоди, ща все будет!</p>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" component={SingleMovie} />
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
