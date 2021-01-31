import React, { useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "50vw",
    },
  },
}));

function AddMovie() {

  const genres = useSelector(store => store.genres);

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_GENRES' });
  }, []);

  return (
    <div>
      <h2>Add a New Movie</h2>
      <br />
      <form className={classes.root} autoComplete="off">
        <TextField id="movieTitle" label="Movie Title" variant="outlined" />
        <br/>
        <TextField
          id="moviePoster"
          label="Movie Poster Image"
          variant="outlined"
        />
        <br/>
        <TextField
          id="movieDescription"
          label="Movie Description"
          multiline
          variant="outlined"
        />
        <br/>
        <TextField id="movieGenre" select label="Genre" variant="outlined">
        {genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.name}>
              {genre.name}
            </MenuItem>
          ))}
        </TextField>
        <br/>
        <ButtonGroup>
          <Button>Send</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
        <br/>
        <Button onClick={() => history.push('/')}>
        <Typography className={classes.root}>
          <Link>
            back to list  
          </Link>
        </Typography>
        </Button>
      </form>
    </div>
  );
}

export default AddMovie;
