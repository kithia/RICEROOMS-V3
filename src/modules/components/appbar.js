import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import logo_horizontal from '../../images/ricerooms/logohorizontal.png';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#855e5e',
            main: '#573434',
            dark: '#2c0e0d',
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
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    link: {
        color: '#000',
        fontSize: 20,
        fontWeight: 300,
        textTransform: 'none',
        margin: theme.spacing(1, 3),
        '&:hover': {
            color: '#e9b542',
            borderColor: '#e9b542',
        },
    },
    root: {
        flexGrow: 1,
    },
    appBar: {
        paddingTop: 22,
        paddingBottom: 22,
        /* borderBottom: `1px solid ${theme.palette.divider}`, */
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
    menuButton: {
        marginRight: theme.spacing(2),
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

function SearchAppBar()  {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    /* Making the drawer more efficient for apple devices */
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {/* Navbar links for mobile site */}
            <Link href="/">
                <img src={logo_horizontal} height="40" className={classes.link} style={{ verticalAlign: 'middle', margin: theme.spacing(2.5, 2) }} alt='ricerooms' />
            </Link>
            <Divider />
            <List>
                {/* Links map */}
                {links.map((links) => (
                <ListItem button>
                    <Link variant="button" underline="none" href={links.hyperlink} className={classes.link}>
                        <span>{links.title}</span>
                    </Link>
                </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBar position="sticky" color="inherit" elevation={2} className={classes.appBar}>
                    <Toolbar>
                        <Link href="/" style={{ margin: theme.spacing(1 ) }}>
                            <img src={logo_horizontal} height="52" style={{ verticalAlign: 'middle' }} alt='ricerooms' />
                        </Link>
                        <div className={classes.root} />
                        {/* Navbar links for desktop site */}
                        <div className={classes.sectionDesktop}>
                            {/* Links map */}
                            {links.map((links) => (
                            <Link variant="button" underline="none" href={links.hyperlink} className={classes.link}>
                                <span>{links.title}</span>
                            </Link>
                            ))}
                        </div>
                        {/* Navbar drawer for mobile site */}
                        <div className={classes.sectionMobile}>
                            {[<MenuIcon />].map((anchor) => (
                                <React.Fragment key={anchor}>
                                    <IconButton onClick={toggleDrawer(anchor, true)} edge="end" className={classes.menuButton} color="inherit" aria-label="open drawer">{anchor}</IconButton>
                                    <SwipeableDrawer
                                        anchor={"right"}
                                        open={state[anchor]}
                                        onClose={toggleDrawer(anchor, false)}
                                        onOpen={toggleDrawer(anchor, true)}
                                        disableBackdropTransition={!iOS}
                                        disableDiscovery={iOS}
                                    >
                                        {list(anchor)}
                                    </SwipeableDrawer>
                                </React.Fragment>
                            ))}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    );
}

export default SearchAppBar;