import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

function Details() {

  const detailMovie = useSelector(store => store?.movieDetails);

  const genres = detailMovie?.array_agg

  console.log(detailMovie);

  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Card>
        <CardHeader title={detailMovie.title} />
        <CardContent>
          <img src={detailMovie.poster} alt={detailMovie.title} />
          <h4>{detailMovie.description}</h4>
          <h3>Genres:</h3>
          {genres?.map((genre => {
                    return (
                        <h4 key={genre}>{genre}</h4>
                    );
                }))}
        </CardContent>
        <CardActions>
        <Button size="small" onClick={handleClick}>
          back to list
        </Button>
        </CardActions>
      </Card>
  );
};

export default Details;