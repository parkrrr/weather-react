import { Typography } from "@mui/material";
import { Feature } from "../weather.types";

export type HeroMode = "humidity" | "temperature" | "pressure";

function Hero(props: { observation: Feature | null, mode: HeroMode }) {

    let value: number | null | undefined;
    switch (props.mode) {
        case "humidity":
            value = props.observation?.properties.relativeHumidity.value;
            break;
        case "temperature":
            value = props.observation?.properties.temperature.value;
            break;
        case "pressure":
            value = props.observation?.properties.barometricPressure.value
            break;
        default:
            value = -1;
            break;
    }

    return (
        <div>
            <Typography variant="h6" gutterBottom component="div">
                {value} as of XX minutes ago
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
                {props.observation?.properties.timestamp}
            </Typography>
        </div>
    );
}

export default Hero;
