import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import './index.css';
import App from './app';
import FourZeroThree from "./403";
import FourZeroFour from "./404";
import AppBar from "./modules/components/appbar";
import Footer from "./modules/components/footer";
import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <div style={{ flexGrow: 1 }}>
                <ThemeProvider theme={theme}>
                    <AppBar />
                    {/* Pages of the website */}
                    <Switch>
                        <Route exact path="/" component={ App }/>
                        <Route path="/forbidden" component={ FourZeroThree }/>
                        <Route path="" component={ FourZeroFour }/>
                    </Switch>
                    <Footer />
                </ThemeProvider>
            </div>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
