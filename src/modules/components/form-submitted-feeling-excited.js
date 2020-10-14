import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
    createStyles({
        div: {
            maxWidth: '500px',
            margin: 'auto',
            paddingTop: '5rem',
            paddingBottom: '5rem',
        },
        button: {
            fontSize: 24,
            fontWeight: 'bold',
            borderRadius: '50rem',
            textTransform: 'none',
            padding: '20px 50px',
        },
        typography: {
            marginBottom: '1.5rem',
        }
    }),
);

function FormSubmittedFeelingExcited() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div align='center' className={classes.div}>
                <Typography variant="h5" component="h5" className={classes.typography} style={{ fontWeight: 'bold' }}>Feeling excited?</Typography>
                <Typography variant="body1" component="p" className={classes.typography} style={{ fontSize: 18 }}>
                    Fill out our personality quiz so that we can match you with places that were made for you</Typography>
                <Button href="#" target="_blank" color="primary" size="large" variant="contained" className={classes.button} disableElevation>
                    Take quiz
                </Button>
            </div>
        </React.Fragment>
    );
}

export default FormSubmittedFeelingExcited;