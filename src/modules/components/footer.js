import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
    sectionDesktop: {
        alignItems: 'center',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));

const links = [
    /* Links */
    {
        title: 'Listings',
        hyperlink: "/listings",
    },
    {
        title: 'Explore',
        hyperlink: "/explore",
    },
    {
        title: 'FAQs',
        hyperlink: "/FAQs",
    },
    {
        title: 'Contact us',
        hyperlink: "/contact-us",
    },
    {
        title: 'Profile',
        hyperlink: "/profile",
    },
];

function Copyright() {
    return (
        /* Footer copyright */
        <div>
            <Typography variant="body2" color="textSecondary" align="center">
                <Link color="inherit" href="/">
                    Ricerooms
                </Link>{' | All Rights Reserved'}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
                {'For students, by students.'}
            </Typography>
        </div>
    );
}

function Footer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="md" component="footer" className={classes.footer}>
                {/* Footer for desktop site */}
                <div className={classes.sectionDesktop}>
                    <Grid container spacing={10} justify="space-evenly">
                        <Grid item sm={3}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {'Information'}
                            </Typography>
                            <ul className={classes.ul}>
                                {/* Links map */}
                                {links.map((links) => (
                                    <li>
                                        <Link href={links.hyperlink} target="_blank" variant="subtitle1" color="textSecondary">
                                            {links.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {'Legal'}
                            </Typography>
                            <ul className={classes.ul}>
                                <li>
                                    <Link href="#" target="_blank" variant="subtitle1" color="textSecondary">
                                        {'Privacy policy'}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" variant="subtitle1" color="textSecondary">
                                        {'Terms of use'}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" variant="subtitle1" color="textSecondary">
                                        {'Cookie policy'}
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
                {/* Footer for mobile site */}
                <div className={classes.sectionMobile}>
                    <Grid container justify="space-evenly">
                        <Grid item xs={4}>
                            <Typography variant="h6" color="textPrimary" style={{ textAlign: 'center' }} gutterBottom>
                                {'Information'}
                            </Typography>
                            <ul className={classes.ul} style={{ textAlign: 'center' }}>
                                {/* Links map */}
                                {links.map((links) => (
                                    <li>
                                        <Link href={links.hyperlink} target="_blank" variant="subtitle1" color="textSecondary">
                                            {links.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6" color="textPrimary" style={{ textAlign: 'center' }} gutterBottom>
                                {'Legal'}
                            </Typography>
                            <ul className={classes.ul} style={{ textAlign: 'center' }}>
                                <li>
                                    <Link href="#" target="_blank" variant="subtitle1" color="textSecondary">
                                        {'Privacy policy'}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" variant="subtitle1" color="textSecondary">
                                        {'Terms of use'}
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" variant="subtitle1" color="textSecondary">
                                        {'Cookie policy'}
                                    </Link>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Footer;
