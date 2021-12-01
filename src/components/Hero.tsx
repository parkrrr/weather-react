import { Typography } from "@mui/material";

export type HeroMode = "humidity" | "temperature" | "pressure";

function Hero(props: { value: string | null, timestamp: string | undefined, mode: HeroMode }) {

    if (!props.value) {
        return (
            <div>
            </div>
        )
    }

    const rtf = new Intl.RelativeTimeFormat("en", {
        localeMatcher: "best fit",
        numeric: "auto",
    });

    if (!props.timestamp) {
        return (
            <Typography variant="h6" gutterBottom component="div">
                {props.value}
            </Typography>
        );
    }

    const dateDiff = (new Date(props.timestamp).getTime() - Date.now()) / 1000;
    var second = 1, 
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let relativeDateString = '';
    const absDateDiff = Math.abs(dateDiff);

    if (absDateDiff > day) {
        relativeDateString = rtf.format(Math.floor(dateDiff / day), 'day');
    } else if (absDateDiff > hour) {
        relativeDateString = rtf.format(Math.floor(dateDiff / hour), 'hour');
    } else if (absDateDiff > minute) {
        relativeDateString = rtf.format(Math.floor(dateDiff / minute), 'minute');
    } else {
        relativeDateString = rtf.format(Math.floor(dateDiff / second), 'second');
    }

    const timestamp = new Date(props.timestamp).toLocaleString();

    return (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                {props.value.toString()} as of {relativeDateString}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                {timestamp}
            </Typography>
        </div>
    );
}

export default Hero;
