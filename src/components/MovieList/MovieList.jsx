import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../MovieItem/MovieItem";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

// Hook API for style/theme
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

// List/Grid component
function MovieList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies); // redux store for movies

  // useEffect for grid population on page load
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  // map movies array to MovieItem component
  return (
    <main>
      <h2>Movie List</h2>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center" alignItems="center">
          {movies.map((movie) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
        </Grid>
      </div>
    </main>
  );
}

export default MovieList;
