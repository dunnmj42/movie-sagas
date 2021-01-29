import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  }
}));

function MovieItem({movie}) {

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={movie.title}/>
      <CardContent>
      <img src={movie.poster} alt={movie.title} />
      </CardContent>
    </Card>
  );
};

export default MovieItem;
