import React, { useEffect, Component } from 'react';
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
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
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

export class MainForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forename: '',
            surname: '',
            mobileNumber: '',
            emailAddress: '',

            university: "KCL",
            courseName: '',
            campus: '',
            studyYear: null,

            bedQuantity: "1",
            contractDuration: "50",
            weeklyBudget: null,
            additionalSpecifications: '',

            termsAndConditions: '',
            dealsAndOffers: '',
        }

    }

    handleChange = (event) => {
        let field = event.target.name;
        let value = event.target.value;
        this.setState({[field]: value});
    }

    /* handleSubmit = (event) => {
        event.preventDefault();
    } */

    render() {
        const universities = [
            {
                label: "Imperial College London",
                value: "ICL",
            },
            {
                label: "King's College London",
                value: "KCL",
            },
            {
                label: "London School of Economics",
                value: "LSE",
            },
            {
                label: "Queen Mary University of London",
                value: "QMUL",
            },
            {
                label: "University College London",
                value: "UCL",
            },
        ];

        return (
            <React.Fragment>
            <Container maxWidth="lg" component="main" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) }}>
                <div style={{ width: '100%'}}>
                    <div align="center">
                        <form /* onSubmit={this.handleSubmit} */>
                            <Typography style={{ marginTop: theme.spacing(1),
                                marginBottom: theme.spacing(1), paddingTop: '2rem', paddingBottom: '5rem' }}>
                                <Typography variant="h3" component="h3" style={{ paddingBottom: '3.5rem', fontWeight:"bold",
                                    textAlign:"left" }}>About you</Typography>
                                <Grid container spacing={8}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <TextField id="forename" label="First name" type="text" name={"forename"}
                                                   value={this.state.forename} onChange={this.handleChange}
                                                   fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <TextField id="surname" label="Last name" type="text" name={"surname"}
                                                   value={this.state.surname} onChange={this.handleChange}
                                                   fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <FormControl fullWidth required>
                                            <InputLabel htmlFor="mobileNumber">Mobile number</InputLabel>
                                            <Input
                                                id="mobileNumber"
                                                type="tel"
                                                name={"mobileNumber"}
                                                value={this.state.mobileNumber}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <TextField id="emailAddress" label="Email" type="email" name={"emailAddress"}
                                                   value={this.state.emailAddress} onChange={this.handleChange}
                                                   fullWidth required />
                                    </Grid>
                                </Grid>
                            </Typography>

                            <Typography style={{ marginTop: theme.spacing(1),
                                marginBottom: theme.spacing(1), paddingTop: '2rem', paddingBottom: '5rem' }}>
                                <Typography variant="h3" component="h3" style={{ paddingBottom: '3.5rem', fontWeight:"bold", textAlign:"left" }}>
                                    About your university</Typography>
                                <Grid container spacing={8}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <FormControl fullWidth required>
                                            <InputLabel id="university">University</InputLabel>
                                            <Select
                                                labelId="university"
                                                id="university"
                                                IconComponent={KeyboardArrowDown}
                                                name={"university"}
                                                value={this.state.university}
                                                onChange={this.handleChange}
                                            >
                                                {universities.map((university) => (
                                                    <MenuItem value={university.value}>{university.label}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <TextField id="courseName" label="Course name" type="text"
                                                   name={"courseName"} value={this.state.courseName}
                                                   onChange={this.handleChange} fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <TextField id="campus" label="Main campus" type="text"
                                                   helperText="If you are unaware of your main campus name, enter the area name or leave blank."
                                                   name={"campus"} value={this.state.campus} onChange={this.handleChange}
                                                   fullWidth />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <TextField id="studyYear" label="Year of study" type="number" min="1" max ="10"
                                                   name={"studyYear"}
                                                   value={this.state.studyYear} onChange={this.handleChange}
                                                   fullWidth required />
                                    </Grid>
                                </Grid>
                            </Typography>

                            <Typography style={{ marginTop: theme.spacing(1),
                                marginBottom: theme.spacing(1), paddingTop: '2rem', paddingBottom: '5rem' }}>
                                <Typography variant="h3" component="h3" style={{ paddingBottom: '3.5rem', fontWeight:"bold", textAlign:"left" }}>
                                    About your place</Typography>
                                <Grid container spacing={8}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <TextField id="bedQuantity" label="Number of beds" type="number" min="1" max="8"
                                                   name={"bedQuantity"} value={this.state.bedQuantity}
                                                   onChange={this.handleChange} fullWidth required />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <FormControl component="fieldset" fullWidth required>
                                            <FormLabel style={{ textAlign: 'left' }} component="legend">Number of weeks</FormLabel>
                                            <RadioGroup name="contractDuration" value={this.state.contractDuration}
                                                        onChange={this.handleChange}>
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
                                                name={"weeklyBudget"}
                                                value={this.state.weeklyBudget}
                                                onChange={this.handleChange}
                                            />
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div>
                                            <Typography variant="h6" component="h6" style={{ textAlign: "left", paddingBottom: '1rem' }}>
                                                Additional specifications</Typography>
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
                                                name={"additionalSpecifications"}
                                                value={this.state.additionalSpecifications}
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl component="fieldset">
                                            <FormGroup style={{ textAlign:'left' }}>
                                                <FormControlLabel
                                                    control={<Checkbox color="primary" name="T&C"/>}
                                                    label={"By ticking this box I agree to the Terms and Conditions"}
                                                    // checked={this.state.termsAndConditions}
                                                    name={"termsAndConditions"}
                                                    value={this.state.termsAndConditions}
                                                    onChange={this.handleChange}
                                                    required
                                                />
                                                <FormControlLabel
                                                    control={<Checkbox color="primary" name="D&O"/>}
                                                    label={"I do not want to receive emails of amazing student deals and offers from ricerooms"}
                                                    // checked={this.state.dealsAndOffers}
                                                    name={"dealsAndOffers"}
                                                    value={this.state.dealsAndOffers}
                                                    onChange={this.handleChange}
                                                />
                                            </FormGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Typography>

                            <Button variant="contained" color="primary" type='submit'
                                    style={{ fontSize: 24,
                                        fontWeight: 'bold',
                                        borderRadius: '50rem',
                                        textTransform: 'none',
                                        padding: '20px 50px' }}
                                    onSubmit={'/thank-you'}
                                    disableElevation>
                                Finish
                            </Button>

                        </form>
                    </div>
                </div>
            </Container>
            </React.Fragment>
        )
    }
}