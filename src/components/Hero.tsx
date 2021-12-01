import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Hero(props: { loaded: boolean, value: string | null, timestamp: string | undefined }) {

    const [isLoaded, setIsLoaded] = useState(props.loaded);
    useEffect(() => { setIsLoaded(props.loaded); }, [props.loaded]);

    if (isLoaded && !props.value) {
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
        <Stack>
            <Typography variant="h6" component="div">
                {props.value?.toString()} as of {relativeDateString}
            </Typography>
            <Typography variant="overline" display="block">
                {timestamp}
            </Typography>
        </Stack>
    );
}

export default Hero;
