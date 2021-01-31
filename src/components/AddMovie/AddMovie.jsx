import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Hook API for theme/style
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "50vw",
    },
  },
}));

function AddMovie() {
  // Local state for new movie to add
  const [newMovie, setNewMovie] = useState({
    title: "",
    poster: "",
    description: "",
    genre_id: "",
  });

  // Redux selector for genres, populates form select
  const genres = useSelector((store) => store.genres);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  // useEffect for GET genres on page load
  useEffect(() => {
    dispatch({ type: "GET_GENRES" });
  }, []);

  // new movie dispatch, alert, form clear, and nav to list
  const dispatchMovie = (event) => {
    event.preventDefault();
    dispatch({ type: "NEW_MOVIE", payload: newMovie });
    alert("Movie added successfully, returning to list view!");
    clearForm();
    history.push("/");
  };

  // clear form function
  const clearForm = () => {
    setNewMovie({
      title: "",
      poster: "",
      description: "",
      genre_id: "",
    });
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <br />
      <form
        className={classes.root}
        autoComplete="off"
        onSubmit={dispatchMovie}
      >
        <TextField
          id="movieTitle"
          label="Movie Title"
          variant="outlined"
          value={newMovie.title}
          onChange={(event) =>
            setNewMovie({ ...newMovie, title: event.target.value })
          }
        />
        <br />
        <TextField
          id="moviePoster"
          label="Movie Poster Image"
          variant="outlined"
          value={newMovie.poster}
          onChange={(event) =>
            setNewMovie({ ...newMovie, poster: event.target.value })
          }
        />
        <br />
        <TextField
          id="movieDescription"
          label="Movie Description"
          multiline
          variant="outlined"
          value={newMovie.description}
          onChange={(event) =>
            setNewMovie({ ...newMovie, description: event.target.value })
          }
        />
        <br />
        <TextField
          id="movieGenre"
          select
          label="Genre"
          value={newMovie.genre_id}
          variant="outlined"
          onChange={(event) =>
            setNewMovie({ ...newMovie, genre_id: event.target.value })
          }
        >
          {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </TextField>
        <br />
        <ButtonGroup>
          <Button type="submit">Save</Button>
          <Button onClick={clearForm}>Clear</Button>
          <Button onClick={() => history.push("/")}>Cancel</Button>
        </ButtonGroup>
      </form>
    </div>
  );
}

export default AddMovie;
