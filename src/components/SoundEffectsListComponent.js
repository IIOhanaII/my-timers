import React from 'react';
import { DropdownItem, DropdownMenu } from 'reactstrap';

export const SoundEffectsList = ({ handleClick }) => {
    return (
        <DropdownMenu container="body" style={{ zIndex: 10000 }}>
            <DropdownItem
                onClick={handleClick}
                data-url="bbc_aircraft--_07000116.mp3"
            >
                Aircraft
            </DropdownItem>
            <DropdownItem
                onClick={handleClick}
                data-url="bbc_applause--_07047083.mp3"
            >
                Applause
            </DropdownItem>
            <DropdownItem
                onClick={handleClick}
                data-url="bbc_domestic-c_07022028.mp3"
            >
                Domestic
            </DropdownItem>
            <DropdownItem
                onClick={handleClick}
                data-url="bbc_heavy-expl_07023360.mp3"
            >
                Heavy Explosion
            </DropdownItem>
            <DropdownItem
                onClick={handleClick}
                data-url="bbc_sirens-and_07027201.mp3"
            >
                Sirens and Bells
            </DropdownItem>
            <DropdownItem onClick={handleClick} data-url="">
                None
            </DropdownItem>
        </DropdownMenu>
    );        
}