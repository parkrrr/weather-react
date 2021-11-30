import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Paper } from '@mui/material';
import { matchPath, Route, Routes } from 'react-router-dom';
import Pressure from './components/Pressure';
import Navigation from './components/Navigation';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import { useEffect, useState } from 'react';
import { ObservationResponse } from './weather.types';

function App() {
  const theme = createTheme();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<ObservationResponse | undefined>();
  
  let stationId: String = "";
  const match = matchPath({
    path: "/:stationId/",
    caseSensitive: false,
    end: false,
  }, window.location.pathname);

  if (match && match.params.stationId) {
    stationId = match?.params.stationId;
    console.debug(`stationId: ${stationId}`);
  }

  useEffect(() => {
    fetch(new Request(`https://api.weather.gov/stations/${stationId}/observations?limit=100`, {
      method: 'GET',
      headers: new Headers({
        'Accept': 'application/geo+json',
        'User-Agent': 'https://weather.parkrrr.net/',
      }),
    })).then(res => res.json())
      .then(
        (result: ObservationResponse) => {
          console.debug(result);
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [stationId])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Routes>
          <Route path="/:stationId/pressure/" element={<Pressure observations={items} error={error} loaded={isLoaded} />} />
          <Route path="/:stationId/temperature/" element={<Temperature />} />
          <Route path="/:stationId/humidity/" element={<Humidity />} />
        </Routes>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <Navigation />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
