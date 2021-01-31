import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 315,
    height: 450,
  },
}));

function MovieItem({ movie }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    dispatch({type: "GET_DETAILS", payload: movie.id});
    history.push('/details');
  };

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardHeader title={movie.title} />
        <CardContent>
          <img src={movie.poster} alt={movie.title} />
        </CardContent>
        <CardActions>
        <Button size="small" onClick={handleClick}>
          Details
        </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieItem;
