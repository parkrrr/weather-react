import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Container, Paper, Stack } from '@mui/material';
import { matchPath, Route, Routes } from 'react-router-dom';
import Pressure from './components/Pressure';
import Navigation from './components/Navigation';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import { useEffect, useState } from 'react';
import { Observation, ObservationCollectionGeoJson } from './vendor/weather.gov.types';
import './styles/main.scss';
import Resolution from './components/Resolution';
import DateResolution from './components/DateResolution';

const DEFAULT_RESOLUTION = 80;
const DEFAULT_DATE_RESOLUTION = 3;

function App() {
  const theme = createTheme();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Observation[] | undefined>();
  const [resolution, setResolution] = useState(DEFAULT_RESOLUTION);
  const [dateResolution, setDateResolution] = useState(DEFAULT_DATE_RESOLUTION);

  const handleResolution = (newResolution: any) => {
    setResolution(newResolution);
  }

  const handleDateResolution = (newResolution: any) => {
    setDateResolution(newResolution);
  }

  let stationId: string = "";
  const match = matchPath({
    path: "/:stationId/",
    caseSensitive: false,
    end: false,
  }, window.location.pathname);

  if (match && match.params.stationId) {
    stationId = match?.params.stationId;
  }

  useEffect(() => {
    if (!stationId) return;

    setIsLoaded(false);

    const refDate = new Date();
    refDate.setDate(refDate.getDate() - dateResolution);
    const startDate = refDate.toISOString();

    console.debug(`start date: ${startDate}`)

    fetch(new Request(`https://api.weather.gov/stations/${stationId}/observations?limit=${resolution}&start=${startDate}`, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/geo+json',
        'User-Agent': 'https://weather.parkrrr.net/',
      }),
    })).then(res => res.json())
      .then(
        (result: ObservationCollectionGeoJson) => {
          const observations = result.features.map((r) => r.properties as Observation);

          observations.sort(function (a: Observation, b: Observation) {
            if (!a.timestamp && !b.timestamp) {
              return 0;
            } else if (!a.timestamp) {
              return 1;
            } else if (!b.timestamp) {
              return -1;
            }

            return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
          });

          setItems(observations);
          setIsLoaded(true);
        },
        (error) => {
          console.error(error);
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [stationId, resolution, dateResolution])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Routes>
          <Route path="/:stationId/pressure/" element={<Pressure observations={items} error={error} loaded={isLoaded} />} />
          <Route path="/:stationId/temperature/" element={<Temperature observations={items} error={error} loaded={isLoaded} />} />
          <Route path="/:stationId/humidity/" element={<Humidity observations={items} error={error} loaded={isLoaded} />} />
        </Routes>
        <Box sx={{ mt: 1 }}>
          <Stack spacing={1}>
            <Resolution defaultValue={DEFAULT_RESOLUTION} onChange={handleResolution} />
            <DateResolution defaultValue={DEFAULT_DATE_RESOLUTION} onChange={handleDateResolution} />
          </Stack>
        </Box>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <Navigation stationId={stationId} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
