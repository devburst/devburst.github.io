import React from "react";
import Container from '@material-ui/core/Container';
// import Header from '../components/header';
// import Footer from '../components/footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    theme => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        },
        main: {
            marginTop: theme.spacing(16),
            marginBottom: theme.spacing(2),
            textAlign: 'center'
        },
        footer: {
            padding: theme.spacing(1),
            marginTop: 'auto',
            color: 'white',
            textAlign: 'center',
            fontSize: '10px',
            backgroundColor: 'black',
        },
    })
);

export default function IndexPage() {
    const classes = useStyles();

    return (
        /* <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Header headerText="This site is generated using Gatsby" />
            </Container>
            <Footer />
        </div> */

        <div className={classes.root}>
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h2" component="h1">
                    {'Andres Carvajal'}
                </Typography>
                <Typography variant="h2" component="h1">
                    {'Software Developer'}
                </Typography>
                <Typography variant="h2" component="h1" gutterBottom>
                    {'Tech Enthusiast'}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {'This blog is under development.'}<br/>
                    {'Thanks for your visit.'}
                </Typography>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="xs">
                    <Typography variant="body1">Copyright 2019. All rights reserved.</Typography>
                </Container>
            </footer>
        </div>
    );
};


//export { default } from './app';