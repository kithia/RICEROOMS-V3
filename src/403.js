import React, { useEffect } from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import icon from "./images/ricerooms/icon.svg";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#494949',
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
    button: {
        color: '#494949',
        borderColor: '#494949',
        fontSize: 24,
        fontWeight: 'bold',
        borderRadius: '50rem',
        textTransform: 'none',
        padding: '20px 50px',
        '&:hover': {
            color: '#fff',
            borderColor: '#e9b542',
            backgroundColor: '#e9b542',
        },
    },
}));

function FourZeroThree() {
    useEffect(() => {
        document.title = "Forbidden access | Ricerooms"
    }, []);

    const classes = useStyles();

    return (
        <Container maxWidth="lg" component="main" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) }}>
            <Grid container>
                <Grid item xs={true} sm={5} md={6}>
                    <div style={{flexGrow: 1}}>
                        <CardMedia
                            component="img"
                            alt="Empty road"
                            image={icon}
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={7} md={6}>
                    <div align="right">
                        <Typography variant="h1" component="h3" style={{ paddingBottom: '.5rem', fontWeight: 'bold' }}>403 Error</Typography>
                        <Typography variant="h2" component="p" style={{ paddingBottom: '1.5rem' }}>
                            This gated community has forbidden access</Typography>
                        <Button href="/" color="primary" size="large" variant="outlined" className={classes.button} style={{ borderWidth: 2 }} disableElevation>
                            Return home
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default FourZeroThree;