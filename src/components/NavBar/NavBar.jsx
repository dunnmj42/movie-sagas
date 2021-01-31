import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function NavBar() {

  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div>
      <Paper>
        <br/>
        <h1>The Movies Saga!</h1>
        <br/>
        <Typography className={classes.root}>
          <Link href="/#/addmovie" onClick={preventDefault}>
            Add Movie  
          </Link>
        </Typography>
        <br/>
      </Paper>
    </div>
  );
};

export default NavBar;