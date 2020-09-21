import React, { useEffect } from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import IndexMain from "./modules/components/index-main";
import IndexAlert from "./modules/components/index-alert";
import pattern from "./images/ricerooms/riceroomslogobackground.png";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6cd9d7',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffe773',
      main: '#e9b542',
      dark: '#b38605',
      contrastText: '#000',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundColor: theme.palette.background.paper,
    backgroundSize: 'length',
    backgroundRepeat: 'repeat-x',
    backgroundPosition: '0% 77.5%',
    top: 20,
  },
}));

function App() {
  const classes = useStyles();
  useEffect(() => {
    document.title = "Home | Ricerooms"
  }, []);

  return (
      <React.Fragment>
        <IndexAlert />
        <div className={classes.background} style={{ backgroundImage: `url(${pattern})` }}>
          <Container maxWidth="lg" component="main" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) }}>
            <IndexMain />
          </Container>
        </div>
      </React.Fragment>
  );
}

export default App;
