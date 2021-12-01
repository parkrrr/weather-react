import { Card, CardContent, Skeleton } from "@mui/material";
import { IChartistSeriesData } from "chartist";
import { useEffect, useState } from "react";
import { Observation } from "../vendor/weather.gov.types";
import Chart from "./Chart";
import Hero from "./Hero";

const Humidity = (props: { observations: Observation[] | undefined, loaded: boolean, error: any }) => {
  const [isLoaded, setIsLoaded] = useState(props.loaded);
  useEffect(() => { setIsLoaded(props.loaded); }, [props.loaded]);

  const observtions: Observation[] | undefined = props.observations;
  let latestObservation: Observation | null = null;

  let value: string | null = null;
  const data: IChartistSeriesData = {
    name: "humidity",
    data: [],
  };

  if (observtions) {
    for (let i = 0; i < observtions.length; i++) {
      const obs = observtions[i];
      if (obs.timestamp && obs.relativeHumidity?.value && data.data) {
        data.data.push({ x: new Date(obs.timestamp), y: obs.relativeHumidity.value } as any);
      }
    }

    // find the latest observation that has valid data
    for (let i = 0; i < observtions.length; i++) {
      const obs = observtions[i];
      if (obs.timestamp && obs.relativeHumidity?.value) {
        latestObservation = obs;
        value = obs.relativeHumidity.value.toFixed(0);
        break;
      }
    }
  }

  const label = `${value}%`;

  return (
    isLoaded && observtions ? (
      <Card sx={{ pb: 4, minWidth: 275 }}>
        <CardContent>
        <Hero loaded={isLoaded} value={label} timestamp={latestObservation?.timestamp} />
        <Chart data={[data]} referenceValue={undefined} interpolationFn={(v: number) => v.toFixed(0)} />
        </CardContent>
      </Card>
    ) : (<Skeleton variant="rectangular" width={350} height={430} />)
  );
}

export default Humidity;
