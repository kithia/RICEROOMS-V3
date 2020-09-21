import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Link from "@material-ui/core/Link";

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
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function IndexAlert() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    return (
        <div className={classes.root}>
            <Collapse in={open}>
                <Alert
                    icon={false}
                    action={
                        <IconButton
                            aria-label="close"
                            color="#fff"
                            size="small"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" color="#fff" />
                        </IconButton>
                    }
                >
                    First time moving out? Check out our move-out guide here, <Link color='primary'>click here</Link>
                </Alert>
            </Collapse>
        </div>
    );
}

export default IndexAlert;