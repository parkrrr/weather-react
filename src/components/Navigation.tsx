import * as React from 'react';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterIcon from '@mui/icons-material/Water';

function Navigation(props: { stationId: string }) {
    const [value, setValue] = React.useState(0);

    return (
    <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => { setValue(newValue); }}
      >
        <BottomNavigationAction component={Link as any} to={`/${props.stationId}/pressure`} label="Pressure" value="pressure" icon={<SpeedIcon />} />
        <BottomNavigationAction component={Link as any} to={`/${props.stationId}/temperature`} label="Temperature" value="temperature" icon={<ThermostatIcon />} />
        <BottomNavigationAction component={Link as any} to={`/${props.stationId}/humidity`} label="Humidity" value="humidity" icon={<WaterIcon />} />
      </BottomNavigation>
      );
}

export default Navigation;