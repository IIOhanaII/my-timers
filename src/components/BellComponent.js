import React from 'react';
import BellImage from '../assets/bell.png';

export const Bell = ({ timerSoundEffectUrl }) => timerSoundEffectUrl !== '' && <img id='base-timer-bell' className='base-timer__bell d-block' src={BellImage} alt="Bell" />
