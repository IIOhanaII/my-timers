import React from 'react';

export const SoundEffectLabel = ({ timerSoundEffectUrl, started, soundEffectName, timerSoundEffectName }) => {
    return (
        <div id='base-timer-label-sound-effect-name' className='base-timer__label--soundEffectName'>
            {
                timerSoundEffectUrl !== ''
                ?
                started
                    ?
                    soundEffectName
                    :
                    timerSoundEffectName
                :
                null
            }
        </div>
    );
}