import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    minHeight: 415,
  },
}));

function MovieItem({ movie }) {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardHeader title={movie.title} />
        <CardContent>
          <img src={movie.poster} alt={movie.title} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export default MovieItem;
