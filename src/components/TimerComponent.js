import React, { Component } from 'react';
import { Circle } from "./CircleComponent";
import { Bell } from "./BellComponent";
import { SoundEffectLabel } from "./SoundEffectLabelComponent";
import { TimeLeftLabel } from "./TimeLeftLabelComponent";
import { TimerName } from "./TimerNameComponent";
import { Controls } from "./ControlsComponent";
import { formatTimeLeft, setCircleDasharray, setRemainingPathColor } from '../utilities/utilities.js';
import Sound from 'react-sound';

export class Timer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hoursLeft: null,
            minutesLeft: null,
            secondsLeft: null,
            name: '',
            soundEffectName: '',
            soundEffectUrl: '',
            started: false,
            isOn: false,
            timeLeft: null,
            totalTime: null,
            circleDasharray: null
        };

        this.startTimer = this.startTimer.bind(this);
        this.timer = null;
        this.setTimer = this.setTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    startTimer() {
        if (!this.state.started) {
            this.setTimer(this.state.started);
            this.setState({
                hoursLeft: this.props.timerHours,
                minutesLeft: this.props.timerMinutes,
                secondsLeft: this.props.timerSeconds,
                name: this.props.timerName,
                soundEffectName: this.props.timerSoundEffectName,
                soundEffectUrl: this.props.timerSoundEffectUrl,
                started: true,
                isOn: true
            });
        }
        else {
            this.setState({
                started: true,
                isOn: true
            });
        }
        this.timer = setInterval(() => {
            if (this.state.secondsLeft > 0) {
                this.setState(({ secondsLeft, timeLeft }) => ({
                    secondsLeft: secondsLeft - 1,
                    timeLeft: timeLeft - 1
                }), () => {
                    if (this.state.timeLeft < 1) {
                        clearInterval(this.timer);
                        this.setState({ isOn: false });
                    }
                });
            }
            else {
                if (this.state.minutesLeft > 0) {
                    this.setState(({ minutesLeft, timeLeft }) => ({
                        minutesLeft: minutesLeft - 1,
                        secondsLeft: 59,
                        timeLeft: timeLeft - 1
                    }));
                }
                else {
                    if (this.state.hoursLeft > 0) {
                        this.setState(({ hoursLeft, timeLeft }) => ({
                            hoursLeft: hoursLeft - 1,
                            minutesLeft: 59,
                            secondsLeft: 59,
                            timeLeft: timeLeft - 1
                        }));
                    }
                }
            }
            this.setState({ circleDasharray: setCircleDasharray(this.state.timeLeft, this.state.totalTime) });
        }, 1000);
    }

    setTimer(started) {
        let totalTimeInSeconds = this.props.computeTotalTimeInSeconds(this.props.timerHours, this.props.timerMinutes, this.props.timerSeconds);

        if (!started) {
            this.setState({
                totalTime: totalTimeInSeconds,
                timeLeft: totalTimeInSeconds
            });
        }
        else this.setState({ timeLeft: totalTimeInSeconds });
    }

    pauseTimer() {
        this.setState({ isOn: false });
        clearInterval(this.timer);
    }

    resetTimer() {
        this.setTimer(this.state.started);
        this.setState({
            hoursLeft: this.props.timerHours,
            minutesLeft: this.props.timerMinutes,
            secondsLeft: this.props.timerSeconds,
            started: false,
            isOn: false,
            circleDasharray: null
        });
    }

    render() {
        return (
            <div className='base-timer'>
                <Circle
                    circleDasharray={this.state.circleDasharray}
                    setRemainingPathColor={setRemainingPathColor}
                    timeLeft={this.state.timeLeft}
                    totalTime={this.state.totalTime}
                />
                
                <div id='base-timer-label' className='base-timer__label'>
                    <Bell timerSoundEffectUrl={this.props.timerSoundEffectUrl}/>
                    <SoundEffectLabel
                        timerSoundEffectUrl={this.props.timerSoundEffectUrl}
                        started={this.state.started}
                        soundEffectName={this.state.soundEffectName}
                        timerSoundEffectName={this.props.timerSoundEffectName}
                    />
                    <TimeLeftLabel
                        started={this.state.started}
                        formatTimeLeft={formatTimeLeft}
                        hoursLeft={this.state.hoursLeft} 
                        minutesLeft={this.state.minutesLeft}
                        secondsLeft={this.state.secondsLeft}
                        timerHours={this.props.timerHours} 
                        timerMinutes={this.props.timerMinutes}
                        timerSeconds={this.props.timerSeconds}
                    />
                    <TimerName
                        started={this.state.started}
                        name={this.state.name}
                        timerName={this.props.timerName}
                    />
                </div>
     
                <Controls
                    started={this.state.started}
                    isOn={this.state.isOn}
                    timeLeft={this.state.timeLeft}
                    startTimer={this.startTimer}
                    pauseTimer={this.pauseTimer}
                    resetTimer={this.resetTimer}
                />

                {
                    !this.state.timeLeft &&
                    <Sound
                        url={this.state.soundEffectUrl}
                        playStatus={Sound.status.PLAYING}
                        onLoading={this.handleSongLoading}
                        onPlaying={this.handleSongPlaying}
                        onFinishedPlaying={this.handleSongFinishedPlaying}
                    />
                }
            </div>
        );
    }
}