import React, { useEffect } from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import FormSubmittedMain from "./modules/components/form-submitted-main";
import FormSubmittedFeelingExcited from "./modules/components/form-submitted-feeling-excited";
import FormSubmittedSubscribe from "./modules/components/form-submitted-subscribe";

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

export const FormSubmitted = () => {
    useEffect(() => {
        document.title = "Thank You | Ricerooms"
    }, []);

    return (
        <Container maxWidth="lg" component="main" style={{ paddingTop: theme.spacing(8), paddingBottom: theme.spacing(8) }}>
            <FormSubmittedMain />
            <FormSubmittedFeelingExcited />
            <FormSubmittedSubscribe />
        </Container>
    )
};