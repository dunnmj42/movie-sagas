import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import NavBar from '../NavBar/NavBar';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';

function App() {
  return (
    <div className="App">
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
