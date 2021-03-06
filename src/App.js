import React, {Component} from 'react';
import './App.css';
import Routes from "./routes";
import {theme} from "./theme";
import {ThemeProvider} from '@material-ui/core/styles';
export default class App extends Component {

    render() {
        return (
            <div>
                <ThemeProvider theme={theme}>
                <Routes/>
                </ThemeProvider>
            </div>
        );
    }
}


