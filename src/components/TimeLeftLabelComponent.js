import React from 'react';

export const TimeLeftLabel = ({ started, formatTimeLeft, hoursLeft, minutesLeft, secondsLeft, timerHours, timerMinutes, timerSeconds}) => {
    return (
        <div id='base-timer-label-time-left' className='base-timer__label--timeLeft'>
            {
                started
                    ?
                    formatTimeLeft(hoursLeft, minutesLeft, secondsLeft)
                    :
                    formatTimeLeft(timerHours, timerMinutes, timerSeconds)
            }
        </div>
    );        
}