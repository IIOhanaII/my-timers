import React from 'react';
import { Jumbotron } from 'reactstrap';

export const Header = () => {
    return (
        <Jumbotron>
            <div className='container d-flex align-items-center justify-content-center'>
                <h1 className='font-header text-info mb-0'>MyTimers</h1>
            </div>
        </Jumbotron>
    );        
}