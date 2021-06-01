export const computeTotalTimeInSeconds = (hours, minutes, seconds) => {
    let sumOfSeconds = 0;

    if (hours !== 0) sumOfSeconds += hours * 3600;
    if (minutes !== 0) sumOfSeconds += minutes * 60;
    if (seconds !== 0) sumOfSeconds += seconds * 1;

    return sumOfSeconds;
}

export const formatTimeLeft = (hoursLeft, minutesLeft, secondsLeft) => {
    if (hoursLeft < 10) hoursLeft = `0${hoursLeft}`;
    if (minutesLeft < 10) minutesLeft = `0${minutesLeft}`;
    if (secondsLeft < 10) secondsLeft = `0${secondsLeft}`;

    return `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
}

const calculateTimeFraction = (timeLeft, totalTime) => {
    const rawTimeFraction = timeLeft / totalTime;
    return rawTimeFraction - (1 / totalTime) * (1 - rawTimeFraction);
}

export const setCircleDasharray = (timeLeft, totalTime) => {
    const FULL_DASH_ARRAY = 283;
    return (calculateTimeFraction(timeLeft, totalTime) * FULL_DASH_ARRAY).toFixed(0);
}

export const setRemainingPathColor = (timeLeft, totalTime) => {
    if (calculateTimeFraction(timeLeft, totalTime) <= 0.2) return 'text-danger';
    else if (calculateTimeFraction(timeLeft, totalTime) > 0.2 && calculateTimeFraction(timeLeft, totalTime) <= 0.5) return 'text-warning';
    else return 'text-info';
}