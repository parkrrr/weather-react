import { Card, CardActions, CardContent, Slider, Typography } from "@mui/material";
import React from "react";

function DateResolution(props: { defaultValue: number, onChange: Function }) {
    const [resolution, setResolution] = React.useState(props.defaultValue);

    const handleResolution = (event: any, newResolution: any) => {
        setResolution(newResolution);
        props.onChange(newResolution);
    };

    const marks = [];
    for (let i = 1; i <= 7; i++) {
        marks.push({
            value: i,
            label: i.toString(),
        });
    };

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h6" color="text.secondary" >
                    Days Shown
                </Typography>
            </CardContent>
            <CardActions>
                <Slider sx={{ mx: 2, mt: -3 }}
                    value={resolution}
                    onChange={handleResolution}
                    valueLabelDisplay="auto"
                    marks={marks}
                    min={1}
                    max={7}
                    step={1}
                    track={false}
                />
            </CardActions>
        </Card>
    );
}

export default DateResolution;