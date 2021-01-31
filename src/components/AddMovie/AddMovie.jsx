import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function AddMovie() {

  const classes = useStyles();

  return (
    <div>
      <h2>Add a New Movie</h2>
      <br/>
      {/* <form className={classes.root} autoComplete="off">
      <TextField id="movieTitle" label="Movie Title" variant="outlined" />
      <TextField id="moviePoster" label="Movie Poster Image" variant="outlined" />
      <TextField
          id="movieDescription"
          label="Movie Description"
          multiline
          rows={5}
          variant="outlined"
        />
        <TextField
          id="movieGenre"
          select
          label="Genre"
          variant="outlined"
        >
          <MenuItem>Adventure</MenuItem>
          <MenuItem>Animated</MenuItem>
          <MenuItem>Biographical</MenuItem>
          <MenuItem>Comedy</MenuItem>
          <MenuItem>Disaster</MenuItem>
          <MenuItem>Drama</MenuItem>
          <MenuItem>Epic</MenuItem>
          <MenuItem>Fantasy</MenuItem>
          <MenuItem>Musical</MenuItem>
          <MenuItem>Romantic</MenuItem>
          <MenuItem>Science Fiction</MenuItem>
          <MenuItem>Space-Opera</MenuItem>
          <MenuItem>Superhero</MenuItem>
        </TextField>
        <ButtonGroup>
          <Button>Save</Button>
          <Button>Cancel</Button>
        </ButtonGroup>
      </form> */}
    </div>
  );
};

export default AddMovie;