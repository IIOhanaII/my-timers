import React from 'react';

export const TimerName = ({ started, name, timerName }) => {
    return (
        <div id='base-timer-label-timer-name' className='base-timer__label--timerName'>
            { started ? name : timerName }
        </div>
    );        
}