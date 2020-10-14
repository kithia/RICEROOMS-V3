import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import thankYouCard from "./../../images/ricerooms/thank-you-card.svg";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) =>
    createStyles({
        title: {
            fontWeight: 'bold',
        },
        subtitle: {
            fontSize: 18,
        },
        sectionDesktop: {
            alignItems: 'center',
            display: 'none',
            [theme.breakpoints.up('md')]: {
                display: 'flex',
            },
        },
    }),
);

function FormSubmittedMain() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h2" component="h3" className={classes.title} style={{ paddingBottom: '4rem', textAlign: 'center' }}>Thank You</Typography>
            <Grid container spacing={10} style={{ marginBottom: '5rem' }}>
                <Grid item xs={12} md={6}>
                    <div style={{ paddingBottom: '1.5rem' }}>
                        <Typography variant="h4" component="h3" className={classes.title} style={{ paddingBottom: '1.5rem' }}>Time For The Fun Part!</Typography>
                        <Typography variant="subtitle1" component="p" className={classes.subtitle}>
                            Now all you have to do is sit back and enjoy a bowl of rice as we send you accommodation options you'll love right to your email</Typography>
                    </div>
                    <div>
                        <Typography variant="h5" component="h3" className={classes.title} style={{ paddingBottom: '1.5rem' }}>
                            Check your email for conformation of your submission</Typography>
                        <Typography variant="subtitle1" component="p" className={classes.subtitle}>
                            {"Didn't receive an email? "}
                            <Link color="inherit" href="#" style={{ textDecoration: 'underline' }}>
                                Click here
                            </Link>
                        </Typography>
                    </div>
                </Grid>
                <Grid item xs={true} md={6} className={classes.sectionDesktop}>
                    <div style={{flexGrow: 1}}>
                        <CardMedia
                            component="img"
                            alt="Thank you"
                            image={thankYouCard}
                        />
                    </div>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default FormSubmittedMain;