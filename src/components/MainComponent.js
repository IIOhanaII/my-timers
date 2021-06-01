import React, { Component } from 'react';
import { Header } from './HeaderComponent';
import { Body } from './BodyComponent';

export class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Body />
            </React.Fragment>
        );
    }
}