import { Skeleton } from "@mui/material";
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
  const items: any[] = []
  let value: string | null = null;

  if (observtions) {
    observtions.forEach((obs) => {
      items.push(<li key={obs["@id"]}>{obs.timestamp} - {obs.barometricPressure?.value}</li>);
    });

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

  const data: IChartistSeriesData[] = [{
    name: "pressure",
    data: observtions?.map((obs) => { return { x: new Date(obs.timestamp!!), y: obs.barometricPressure!.value! }; }),
  }];

  return (
    <div>
      <Hero loaded={isLoaded} value={label} timestamp={latestObservation?.timestamp} />
      {
        isLoaded && observtions ? (
          <Chart data={data} referenceValue={29.92} interpolationFn={(v: any) => v} />
        ) : (<Skeleton variant="rectangular" width="100%" height={250} />)
      }
    </div>
  );
}

export default Pressure;
