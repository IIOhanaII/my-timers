import React from 'react';
import { Button } from 'reactstrap';

export const Controls = ({ started, isOn, timeLeft, startTimer, pauseTimer, resetTimer }) => {

    let start = !started &&
    <Button outline color='success' onClick={startTimer}>Start</Button>;

    let pause = started && isOn &&
    <Button outline color='warning' onClick={pauseTimer}>Pause</Button>;

    let resume = started && !isOn && timeLeft &&
    <Button className='mr-2' outline color='success' onClick={startTimer}>Resume</Button>;

    let reset = started && !isOn &&
    <Button outline color='primary' onClick={resetTimer}>Reset</Button>;

    return (
        <div id='controls-panel' className='text-center mt-3'>
            {start}
            {pause}
            {resume}
            {reset}
        </div>
    );        
}