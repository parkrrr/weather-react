import { Skeleton } from "@mui/material";
import { IChartistSeriesData } from "chartist";
import { useEffect, useState } from "react";
import { Observation } from "../vendor/weather.gov.types";
import Chart from "./Chart";
import Hero from "./Hero";

const Temperature = (props: { observations: Observation[] | undefined, loaded: boolean, error: any }) => {
  const [isLoaded, setIsLoaded] = useState(props.loaded);
  useEffect(() => { setIsLoaded(props.loaded); }, [props.loaded]);

  const observtions: Observation[] | undefined = props.observations;
  let latestObservation: Observation | null = null;

  let value: string | null = null;
  const data: IChartistSeriesData = {
    name: "temperature",
    data: [],
  };

  if (observtions) {
    for (let i = 0; i < observtions.length; i++) {
      const obs = observtions[i];
      if (obs.timestamp && obs.temperature?.value && data.data) {
        data.data.push({ x: new Date(obs.timestamp), y: ((obs.temperature.value * 1.8) + 32) } as any);
      }
    }

    // find the latest observation that has valid data
    for (let i = 0; i < observtions.length; i++) {
      const obs = observtions[i];
      if (obs.timestamp && obs.temperature?.value) {
        latestObservation = obs;
        value = ((obs.temperature.value * 1.8) + 32).toFixed(0);
        break;
      }
    }
  }

  const label = `${value} °F`;

  return (
    <div>
      <Hero loaded={isLoaded} value={label} timestamp={latestObservation?.timestamp} />
      {
        isLoaded && observtions ? (
          <Chart data={[data]} referenceValue={undefined} interpolationFn={(v: number) => v.toFixed(0)} />
        ) : (<Skeleton variant="rectangular" width="100%" height={250} />)
      }
    </div>
  );
}

export default Temperature;
