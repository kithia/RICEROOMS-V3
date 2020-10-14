import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            fontSize: 24,
            fontWeight: 'bold',
            borderRadius: '50rem',
            textTransform: 'none',
            padding: '20px 50px',
        },
        typography: {
            marginBottom: '2rem',
        }
    }),
);

function FormSubmittedSubscribe() {
    const classes = useStyles();
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <React.Fragment>
            <div align='center' style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
                <Typography variant="h5" component="h5" className={classes.typography} style={{ fontWeight: 'bold', maxWidth: '500px' }}>
                    Subscribe to our mailing list for amazing student offers and deals!</Typography>
                <form noValidate autoComplete="off">
                    <TextField className={classes.typography} required fullWidth id="standard-full-width" placeholder="Enter your email here:" value={value}
                               onChange={handleChange} InputLabelProps={{
                        shrink: true,}} />
                    <Button color="primary" size="large" variant="contained" type={"submit"} className={classes.button} disableElevation>
                        Subscribe
                    </Button>
                </form>
            </div>
        </React.Fragment>
    );
}

export default FormSubmittedSubscribe;