import {HashRouter as Router, Route} from 'react-router-dom';
import MovieList from '../MovieList/MovieList'
import NavBar from '../NavBar/NavBar';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar />
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/addmovie">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
};


export default App;
