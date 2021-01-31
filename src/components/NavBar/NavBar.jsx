import Card from "@material-ui/core/Card";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Hook API for style/theme
const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

// Navbar/header component
function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <Card>
        <br />
        <h1>The Movies Saga!</h1>
        <br />
        <Typography className={classes.root}>
          <Link href="/#/addmovie" color="inherit">
            Add Movie
          </Link>
        </Typography>
        <br />
      </Card>
    </div>
  );
}

export default NavBar;
