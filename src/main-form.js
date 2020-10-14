import React, { useEffect } from 'react';
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { KeyboardArrowDown } from "@material-ui/icons";
import Blank from "./images/countries/000-blank.svg.png"
import Afghanistan from "./images/countries/122-afghanistan.svg"
import Albania from "./images/countries/117-albania.svg"
import Algeria from "./images/countries/126-algeria.svg"
import AmericanSamoa from "./images/countries/085-american-samoa.svg"
import Andorra from "./images/countries/102-andorra.svg"
import Angola from "./images/countries/124-angola.svg"
import Anguilla from "./images/countries/087-anguilla.svg"
import AntiguaAndBarbuda from "./images/countries/104-antigua-and-barbuda.svg"
import Argentina from "./images/countries/064-argentina.svg"
import Armenia from "./images/countries/121-armenia.svg"
import Aruba from "./images/countries/099-aruba.svg"
import Australia from "./images/countries/130-australia.svg"
import Austria from "./images/countries/189-austria.svg"
import Azerbaijan from "./images/countries/125-azerbaijan.svg"
import Bahamas from "./images/countries/194-bahamas.svg"
import Bahrain from "./images/countries/116-bahrain.svg"
import Bangladesh from "./images/countries/128-bangladesh.svg"
import Barbados from "./images/countries/111-barbados.svg"
import Belarus from "./images/countries/110-belarus.svg"
import Belgium from "./images/countries/054-belgium.svg"
import Belize from "./images/countries/115-belize.svg"
import Benin from "./images/countries/098-benin.svg"
import Bermuda from "./images/countries/114-bermuda.svg"
import Bhutan from "./images/countries/094-bhutan.svg"
import Bolivia from "./images/countries/133-bolivia.svg"
import BosniaAndHerzegovina from "./images/countries/113-bosnia-and-herzegovina.svg"
import Botswana from "./images/countries/127-botswana.svg"
import Brazil from "./images/countries/250-brazil.svg"
import BritishIndianOceanTerritory from "./images/countries/093-british-indian-ocean-territory.svg"
import BritishVirginIslands from "./images/countries/112-british-virgin-islands.svg"
import Brunei from "./images/countries/107-brunei.svg"
import Bulgaria from "./images/countries/135-bulgaria.svg"
import BurkinaFaso from "./images/countries/118-burkina-faso.svg"
import Burundi from "./images/countries/103-burundi.svg"
import Cambodia from "./images/countries/132-cambodia.svg"
import Cameroon from "./images/countries/106-cameroon.svg"
import Canada from "./images/countries/206-canada.svg"
import CapeVerde from "./images/countries/096-cape-verde.svg"
import CaymanIslands from "./images/countries/092-cayman-islands.svg"
import CentralAfricanRepublic from "./images/countries/091-central-african-republic.svg"
import Chad from "./images/countries/095-chad.svg"
import Chile from "./images/countries/051-chile.svg"
import China from "./images/countries/261-china.svg"
import ChristmasIslands from "./images/countries/083-christmas-island.svg"
import CocosIslands from "./images/countries/082-cocos-island.svg"
import Colombia from "./images/countries/062-colombia.svg"
import Comoros from "./images/countries/090-comoros.svg"
import CookIslands from "./images/countries/081-cook-islands.svg"
import CostaRica from "./images/countries/131-costa-rica.svg"
import Croatia from "./images/countries/134-croatia.svg"
import Cuba from "./images/countries/129-cuba.svg"
import Curacao from "./images/countries/212-curacao.svg"
import Cyprus from "./images/countries/030-cyprus.svg"
import CzechRepublic from "./images/countries/061-czech-republic.svg"
import Jamaica from "./images/countries/026-jamaica.svg"
import Kenya from "./images/countries/029-kenya.svg"
import UnitedKingdom from "./images/countries/262-united-kingdom.svg"
import UnitedStates from "./images/countries/153-united-states-of-america.svg"
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Container from "@material-ui/core/Container";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import authentication from './authentication.js';
import Grid from "@material-ui/core/Grid";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

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
    },
    countryIcon: {
        height: 24,
    },
    button: {
        fontSize: 24,
        fontWeight: 'bold',
        borderRadius: '50rem',
        textTransform: 'none',
        padding: '20px 50px',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['About you', 'About your university', 'About your place'];
}

function getStepContent(stepIndex) {
    const dialingCodes = [
        /* Dialing codes */
        {
            code: '+93',
            flag: Afghanistan,
            state: 'Afghanistan',
            abbreviation: 'AFG',
        },
        {
            code: '+355',
            flag: Albania,
            state: 'Albania',
            abbreviation: 'ALB',
        },
        {
            code: '+213',
            flag: Algeria,
            state: 'Algeria',
            abbreviation: 'DZA',
        },
        {
            code: '+1-684',
            flag: AmericanSamoa,
            state: 'American Samoa',
            abbreviation: 'ASM',
        },
        {
            code: '+376',
            flag: Andorra,
            state: 'Andorra',
            abbreviation: 'AND',
        },
        {
            code: '+244',
            flag: Angola,
            state: 'Angola',
            abbreviation: 'AGO',
        },
        {
            code: '+1-264',
            flag: Anguilla,
            state: 'Anguilla',
            abbreviation: 'AIA',
        },
        {
            code: '+672',
            flag: Blank,
            state: 'Antarctica',
            abbreviation: 'ATA',
        },
        {
            code: '+1-268',
            flag: AntiguaAndBarbuda,
            state: 'Antigua and Barbuda',
            abbreviation: 'ATG',
        },
        {
            code: '+54',
            flag: Argentina,
            state: 'Argentina',
            abbreviation: 'ARG',
        },
        {
            code: '+2374',
            flag: Armenia,
            state: 'Armenia',
            abbreviation: 'ARM',
        },
        {
            code: '+297',
            flag: Aruba,
            state: 'Aruba',
            abbreviation: 'ABW',
        },
        {
            code: '+61',
            flag: Australia,
            state: 'Australia',
            abbreviation: 'AUS',
        },
        {
            code: '+43',
            flag: Austria,
            state: 'Austria',
            abbreviation: 'AUT',
        },
        {
            code: '+994',
            flag: Azerbaijan,
            state: 'Azerbaijan',
            abbreviation: 'AZE',
        },
        {
            code: '+1-242',
            flag: Bahamas,
            state: 'Bahamas',
            abbreviation: 'BHS',
        },
        {
            code: '+973',
            flag: Bahrain,
            state: 'Bahrain',
            abbreviation: 'BHR',
        },
        {
            code: '+880',
            flag: Bangladesh,
            state: 'Bangladesh',
            abbreviation: 'BGD',
        },
        {
            code: '+1-246',
            flag: Barbados,
            state: 'Barbados',
            abbreviation: 'BRB',
        },
        {
            code: '+375',
            flag: Belarus,
            state: 'Belarus',
            abbreviation: 'BLR',
        },
        {
            code: '+32',
            flag: Belgium,
            state: 'Belgium',
            abbreviation: 'BEL',
        },
        {
            code: '+501',
            flag: Belize,
            state: 'Belize',
            abbreviation: 'BLZ',
        },
        {
            code: '+229',
            flag: Benin,
            state: 'Benin',
            abbreviation: 'BEN',
        },
        {
            code: '+1-441',
            flag: Bermuda,
            state: 'Bermuda',
            abbreviation: 'BMU',
        },
        {
            code: '+975',
            flag: Bhutan,
            state: 'Bhutan',
            abbreviation: 'BTN',
        },
        {
            code: '+591',
            flag: Bolivia,
            state: 'Bolivia',
            abbreviation: 'BOL',
        },
        {
            code: '+387',
            flag: BosniaAndHerzegovina,
            state: 'Bosnia and Herzegovina',
            abbreviation: 'BIH',
        },
        {
            code: '+267',
            flag: Botswana,
            state: 'Botswana',
            abbreviation: 'BWA',
        },
        {
            code: '+55',
            flag: Brazil,
            state: 'Brazil',
            abbreviation: 'BRA',
        },
        {
            code: '+246',
            flag: BritishIndianOceanTerritory,
            state: 'British Indian Ocean Territory',
            abbreviation: 'IOT',
        },
        {
            code: '+1-284',
            flag: BritishVirginIslands,
            state: 'British Virgin Islands',
            abbreviation: 'VGB',
        },
        {
            code: '+673',
            flag: Brunei,
            state: 'Brunei',
            abbreviation: 'BRN',
        },
        {
            code: '+359',
            flag: Bulgaria,
            state: 'Bulgaria',
            abbreviation: 'BGR',
        },
        {
            code: '+226',
            flag: BurkinaFaso,
            state: 'Burkina Faso',
            abbreviation: 'BFA',
        },
        {
            code: '+257',
            flag: Burundi,
            state: 'Burundi',
            abbreviation: 'BDI',
        },
        {
            code: '+855',
            flag: Cambodia,
            state: 'Cambodia',
            abbreviation: 'KHM',
        },
        {
            code: '+237',
            flag: Cameroon,
            state: 'Cameroon',
            abbreviation: 'CMR',
        },
        {
            code: '+1',
            flag: Canada,
            state: 'Canada',
            abbreviation: 'CAN',
        },
        {
            code: '+238',
            flag: CapeVerde,
            state: 'Cape Verde',
            abbreviation: 'CPV',
        },
        {
            code: '+1-345',
            flag: CaymanIslands,
            state: 'Cayman Islands',
            abbreviation: 'CYM',
        },
        {
            code: '+236',
            flag: CentralAfricanRepublic,
            state: 'Central African Republic',
            abbreviation: 'CAF',
        },
        {
            code: '+235',
            flag: Chad,
            state: 'Chad',
            abbreviation: 'TCD',
        },
        {
            code: '+56',
            flag: Chile,
            state: 'Chile',
            abbreviation: 'CHL',
        },
        {
            code: '+86',
            flag: China,
            state: 'China',
            abbreviation: 'CHN',
        },
        {
            code: '+61',
            flag: ChristmasIslands,
            state: 'Christmas Islands',
            abbreviation: 'CXR',
        },
        {
            code: '+61',
            flag: CocosIslands,
            state: 'Cocos Islands',
            abbreviation: 'CCK',
        },
        {
            code: '+57',
            flag: Colombia,
            state: 'Colombia',
            abbreviation: 'COL',
        },
        {
            code: '+269',
            flag: Comoros,
            state: 'Comoros',
            abbreviation: 'COM',
        },
        {
            code: '+682',
            flag: CookIslands,
            state: 'Cook Islands',
            abbreviation: 'COK',
        },
        {
            code: '+506',
            flag: CostaRica,
            state: 'Costa Rica',
            abbreviation: 'CRI',
        },
        {
            code: '+385',
            flag: Croatia,
            state: 'Croatia',
            abbreviation: 'HRV',
        },
        {
            code: '+53',
            flag: Cuba,
            state: 'Cuba',
            abbreviation: 'CUB',
        },
        {
            code: '+599',
            flag: Curacao,
            state: 'Curaçao',
            abbreviation: 'CUW',
        },
        {
            code: '+357',
            flag: Cyprus,
            state: 'Cyprus',
            abbreviation: 'CYP',
        },
        {
            code: '+420',
            flag: CzechRepublic,
            state: 'Czech Republic',
            abbreviation: 'CZE',
        },
        {
            code: '+1-876',
            flag: Jamaica,
            state: 'Jamaica',
            abbreviation: 'JAM',
        },
        {
            code: '+254',
            flag: Kenya,
            state: 'Kenya',
            abbreviation: 'KEN',
        },
        {
            code: '+44',
            flag: UnitedKingdom,
            state: 'United Kingdom',
            abbreviation: 'GBR',
        },
        {
            code: '+1',
            flag: UnitedStates,
            state: 'United States',
            abbreviation: 'USA',
        },
    ];

    switch (stepIndex) {
        case 0:
            return <React.Fragment>
                <Typography variant="h3" component="h3" style={{ paddingBottom: '3.5rem', fontWeight:"bold", textAlign:"left" }}>About you</Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField id="forename" label="First name" type="text" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField id="surname" label="Last name" type="text" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl fullWidth required>
                            <InputLabel htmlFor="mobileNumber">Mobile number</InputLabel>
                            <Input
                                id="mobileNumber"
                                type="tel"
                                startAdornment={<InputAdornment position="start">
                                    <Select IconComponent={KeyboardArrowDown}>
                                        {/* Dialing codes map */}
                                        {dialingCodes.map((dialingCodes) => (
                                            <MenuItem value={dialingCodes.code}>
                                                <ListItemIcon>
                                                    <img style={{ height: 24 }} alt={dialingCodes.abbreviation} src={dialingCodes.flag}/>
                                                </ListItemIcon>
                                                <ListItemText primary={dialingCodes.code} secondary={dialingCodes.state} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </InputAdornment>}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField id="emailAddress" label="Email" type="email" fullWidth required />
                    </Grid>
                </Grid>
            </React.Fragment>;
        case 1:
            return <React.Fragment>
                <Typography variant="h3" component="h3" style={{ paddingBottom: '3.5rem', fontWeight:"bold", textAlign:"left" }}>About your university</Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl fullWidth required>
                            <InputLabel id="university">University</InputLabel>
                            <Select
                                labelId="university"
                                id="university"
                                IconComponent={KeyboardArrowDown}
                            >
                                <MenuItem value={"ICL"}>Imperial College London</MenuItem>
                                <MenuItem value={"KCL"}>King's College London</MenuItem>
                                <MenuItem value={"LSE"}>London School of Economics</MenuItem>
                                <MenuItem value={"QMUL"}>Queen Mary University of London</MenuItem>
                                <MenuItem value={"UCL"}>University College London</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField id="courseName" label="Course name" type="text" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField id="campus" label="Main campus" type="text"
                                   helperText="If you are unaware of your main campus name, enter the area name or leave blank."
                                   fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField id="studyYear" label="Year of study" type="number" min="1" max ="10" fullWidth required />
                    </Grid>
                </Grid>
            </React.Fragment>;
        case 2:
            return <React.Fragment>
                <Typography variant="h3" component="h3" style={{ paddingBottom: '3.5rem', fontWeight:"bold", textAlign:"left" }}>About your place</Typography>
                <Grid container spacing={8}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField id="bedQuantity" label="Number of beds" type="number" min="1" max="8" fullWidth required />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl component="fieldset" fullWidth required>
                            <FormLabel style={{ textAlign: 'left' }} component="legend">Number of weeks</FormLabel>
                            <RadioGroup name="contract duration">
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <div style={{ textAlign: 'left' }}>
                                            <FormControlLabel value="40" control={<Radio color="primary" />} label="40 Weeks" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <div style={{ textAlign: 'left' }}>
                                            <FormControlLabel value="50" control={<Radio color="primary" />} label="50 Weeks" />
                                        </div>
                                    </Grid>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <FormControl fullWidth required>
                            <InputLabel htmlFor="weeklyBudget">Weekly budget</InputLabel>
                            <Input
                                id="weeklyBudget"
                                type="number"
                                step="0.01"
                                min="0.01"
                                startAdornment={<InputAdornment position="start">£</InputAdornment>}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <Typography variant="h6" component="h6" style={{ textAlign: "left", paddingBottom: '1rem' }}>Additional specifications</Typography>
                            <Typography variant="subtitle1" component="p" color="textSecondary" style={{ textAlign:"left", lineHeight: 1.25, paddingBottom: '1rem' }}>
                                This is where you tell us about anything else you feel is important, it can be as simple,
                                creative or detailed as you please. It can even be left blank!</Typography>
                            <Typography variant="subtitle1" component="p" color="textSecondary" style={{ textAlign:"left", lineHeight: 1.25, paddingBottom: '1rem' }}>
                                Below is a reminder of what you get with every listing we read and also some ideas about
                                what you might want to tell us to help ensure that we can find the perfect place for you.
                            </Typography>
                        </div>
                        <div>
                            <TextField
                                id="additionalSpecifications"
                                label=""
                                fullWidth
                                multiline
                                rows={15}
                                variant="outlined"
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl component="fieldset">
                            <FormGroup style={{ textAlign:'left' }}>
                                <FormControlLabel
                                    control={<Checkbox color="primary" name="T&C"/>}
                                    label={"By ticking this box I agree to the Terms and Conditions"}
                                    required
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" name="D&O"/>}
                                    label={"I do not want to receive emails of amazing student deals and offers from ricerooms"}
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </React.Fragment>;
        default:
            return 'Unknown stepIndex';
    }
}

export const MainForm = (props) => {
    useEffect(() => {
        document.title = "Find a place | Ricerooms"
    }, []);

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Container maxWidth="lg" component="main" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) }}>
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div align="center">
                    {activeStep === steps.length ? (
                        <div>
                            <CircularProgress />
                            <Typography className={classes.instructions}>Submitting</Typography>
                            <Typography className={classes.instructions}>Not working? <Link onClick={() => {authentication.completeForm(() => {
                                props.history.push('/thank-you');});}} color="inherit">Try again</Link>
                            </Typography>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions} style={{ paddingTop: '2rem', paddingBottom: '5rem' }}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    className={classes.button}
                                    style={{ marginRight: theme.spacing(1) }}
                                >
                                    Back
                                </Button>
                                <Button variant="contained" color="primary" type={activeStep === steps.length - 1 ? 'submit' : ''}
                                        className={classes.button}
                                        onClick={handleNext} onSubmit={() => {authentication.completeForm(() => {
                                    props.history.push('/thank-you');});}} disableElevation>
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    )
};