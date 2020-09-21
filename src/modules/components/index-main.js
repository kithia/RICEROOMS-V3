import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Slider from "@material-ui/core/Slider";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";

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
    formLabel: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'none',
    },
}));

function valuetext(value) {
    return `£${value}`;
}

function IndexMain() {
    const classes = useStyles();
    const [value, setValue] = React.useState([120, 250]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <Grid container style={{ marginBottom: '5rem' }}>
                <Grid item xs={0} sm={0} md={6}>
                    <div style={{ maxWidth: '450px', marginTop: '2.5vw' }}>
                        <Typography variant="h3" component="h3" style={{ paddingBottom: '1.5rem', fontWeight: 'bold' }}>
                            Find and Secure the Perfect Place in Minutes!</Typography>
                        <Typography variant="body1" component="p" style={{ paddingBottom: '1.5rem', fontSize: 22 }}>
                            Built by students for students</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Card elevation={2}>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" fullWidth required>
                                        <Typography className={classes.formLabel} id="text-field" gutterBottom>
                                            University
                                        </Typography>
                                    <TextField fullWidth id="university" type="string"
                                               placeholder="I study at..." required autoFocus />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" fullWidth required>
                                        <Typography className={classes.formLabel} id="radio-group" gutterBottom>
                                            Accommodation type
                                        </Typography>
                                        <RadioGroup name="occupant quantity">
                                            <Grid container>
                                                <Grid item xs={12} sm={12} md={3}>
                                                    <div style={{ textAlign: 'left', marginTop: 9.5 }}>
                                                        <Typography>I want a place for</Typography>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={3}>
                                                    <div style={{ textAlign: 'left' }}>
                                                        <FormControlLabel value="multiple" control={<Radio color="primary" />} label="a group" />
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={3}>
                                                    <div style={{ textAlign: 'left' }}>
                                                        <FormControlLabel value="single" control={<Radio color="primary" />} label="myself" />
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl component="fieldset" fullWidth required>
                                        <Typography className={classes.formLabel} id="range-slider" gutterBottom>
                                            Budget per week
                                        </Typography>
                                        <Slider
                                            color={"primary"}
                                            value={value}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={valuetext}
                                            min={0}
                                            step={20}
                                            max={600}
                                        />
                                        <Grid spacing={5} container>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="min-budget">Min Price</InputLabel>
                                                <Input
                                                    id="min-budget"
                                                    startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                />
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6}>
                                            <FormControl fullWidth>
                                                <InputLabel htmlFor="max-budget">Max Price</InputLabel>
                                                <Input
                                                    id="max-budget"
                                                    startAdornment={<InputAdornment position="start">£</InputAdornment>}
                                                />
                                            </FormControl>
                                        </Grid>
                                        </Grid>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button href="/find-a-place" target="_blank" color="primary" size="large" variant="contained" className={classes.button} disableElevation>
                                        Find me a place
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <div align='center'>
                <Card elevation={2}>
                    <CardContent>
                        <Typography variant="body1" component="p" style={{ fontSize: 22 }}>Private Rented Student Accommodation
                            | Purpose Built Student Accommodation</Typography>
                    </CardContent>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default IndexMain;