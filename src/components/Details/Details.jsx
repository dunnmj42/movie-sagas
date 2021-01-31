import { useSelector } from 'react-redux'

function Details() {

  const detailMovie = useSelector(store => store.movieDetails);

  console.log(detailMovie);

  return (
    <p>Details!</p>
  );
};

export default Details;