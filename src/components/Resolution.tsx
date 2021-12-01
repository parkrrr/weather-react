import { Alert, Box, Button, Card, CardActions, CardContent, CardHeader, Slider, Stack, Typography } from "@mui/material";
import React from "react";

function Resolution(props: { defaultValue: number, onChange: Function }) {
    const [resolution, setResolution] = React.useState(props.defaultValue);

    const handleResolution = (event: any, newResolution: any) => {
        setResolution(newResolution);
        props.onChange(newResolution);
    };

    const marks = [
        {
            value: 40,
            label: '40',
        },
        {
            value: 80,
            label: '80',
        },
        {
            value: 120,
            label: '120',
        },
        {
            value: 160,
            label: '160',
        }, {
            value: 200,
            label: 'All',
        },

    ];


    return (
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h6" color="text.secondary" >
              Data Points
            </Typography>
          </CardContent>
          <CardActions>
         <Slider sx={{ mx: 2, mt: -3 }}
             //aria-labelledby="input-slider"
             value={resolution}
             onChange={handleResolution}
             valueLabelDisplay="auto"
             marks={marks}
             min={40}
             max={200}
             step={null}
             track={false}
         />
        
          </CardActions>
        </Card>
      );

//     return (
//         <Card sx={{ display: 'flex' }}>
//             <CardHeader title="Data Points" />
        
//         <CardContent>
//         <Slider
//             //aria-labelledby="input-slider"
//             value={resolution}
//             onChange={handleResolution}
//             valueLabelDisplay="auto"
//             marks={marks}
//             min={40}
//             max={200}
//             step={null}
//             track={false}
//         />
//         </CardContent>
//         </Card>
      
//     );

    }

export default Resolution;