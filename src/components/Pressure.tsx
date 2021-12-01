import { Skeleton, Stack } from "@mui/material";
import { IChartistSeriesData } from "chartist";
import { useEffect, useState } from "react";
import { Observation } from "../vendor/weather.gov.types";
import Chart from "./Chart";
import Hero from "./Hero";

const Pressure = (props: { observations: Observation[] | undefined, loaded: boolean, error: any }) => {
  const [isLoaded, setIsLoaded] = useState(props.loaded);
  useEffect(() => { setIsLoaded(props.loaded); }, [props.loaded]);

  const observtions: Observation[] | undefined = props.observations;
  let latestObservation: Observation | null = null;

  let value: string | null = null;
  const data: IChartistSeriesData = {
    name: "pressure",
    data: [],
  };

  if (observtions) {
    for (let i = 0; i < observtions.length; i++) {
      const obs = observtions[i];
      if (obs.timestamp && obs.barometricPressure?.value && data.data) {
        data.data.push({ x: new Date(obs.timestamp), y: obs.barometricPressure.value* 0.0002953 } as any);
      }
    }

    // find the latest observation that has valid data
    for (let i = 0; i < observtions.length; i++) {
      const obs = observtions[i];

      if (obs.timestamp && obs.barometricPressure?.value) {
        latestObservation = obs;
        value = (obs.barometricPressure.value * 0.0002953).toFixed(2);
        break;
      }
    }
  }

  const label = `${value} inHg`

  return (
        isLoaded && observtions ? (
          <Stack>
            <Hero loaded={isLoaded} value={label} timestamp={latestObservation?.timestamp} />
            <Chart data={[data]} referenceValue={29.92} interpolationFn={(v: number) => v.toFixed(2)} />
          </Stack>
        ) : (<Skeleton variant="rectangular" width={350} height={500} />)
      
  );
}

export default Pressure;
