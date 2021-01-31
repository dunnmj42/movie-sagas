import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// MUI "dark mode" theme for Provider
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("FETCH_MOVIES", fetchAllMovies);
  yield takeEvery("GET_DETAILS", getDetails);
  yield takeEvery("GET_GENRES", getGenres);
  yield takeEvery("NEW_MOVIE", newMovie)
};

function* fetchAllMovies() {
  // get all movies from the DB
  try {
    const movies = yield axios.get("/api/movie");
    console.log("get all:", movies.data);
    yield put({ type: "SET_MOVIES", payload: movies.data });
  } catch (error) {
    console.error(error);
  };
};

// get one movie for detail view
function* getDetails(action) {
  try {
      const response = yield axios.get(`/api/movie/${action.payload}`);
      yield put({type: 'GET_MOVIE_DETAILS', payload: response.data[0]});
  } catch (error) {
      console.error(error);
  };
};

function* getGenres() {
  // get all genres from the DB
  try {
    const genres = yield axios.get("/api/genre");
    console.log("get all:", genres.data);
    yield put({ type: "SET_GENRES", payload: genres.data });
  } catch (error) {
    console.error(error);
  };
};

function* newMovie(action) {
  try {
    yield axios.post("/api/movie", action.payload)
    yield put({type: "FETCH_MOVIES"})
  } catch (error) {
    console.error(error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store single movie for detail view
const movieDetails = (state  = {}, action) => {
  if(action.type === 'GET_MOVIE_DETAILS') {
      return action.payload;
  }
  return state;
};

// Used to store movies returned from the server
const movies = (state = [], action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return action.payload;
    default:
      return state;
  };
};

// Used to store the movie genres
const genres = (state = [], action) => {
  switch (action.type) {
    case "SET_GENRES":
      return action.payload;
    default:
      return state;
  };
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    movieDetails,
    genres,
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={storeInstance}>
        <CssBaseline />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
