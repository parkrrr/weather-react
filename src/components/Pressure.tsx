import { Card, Paper, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Feature, ObservationResponse } from "../weather.types";
import Hero from "./Hero";

const Pressure = (props: { observations: ObservationResponse | undefined, loaded: boolean, error: any }) => {

  let { stationId } = useParams();

  const [isLoaded, setIsLoaded] = useState(props.loaded);

  useEffect(() => { setIsLoaded(props.loaded); }, [props.loaded]);

  const observtions: Feature[] | undefined = props.observations?.features;
  let latestObservation: Feature | null = null;
  const items: any[] = []

  if (observtions) {
    observtions.sort(function (a, b) {
      return new Date(b.properties.timestamp).getTime() - new Date(a.properties.timestamp).getTime();
    });

    observtions.forEach((obs) => {
      items.push(<li key={obs.id}>{obs.properties.timestamp} - {obs.properties.barometricPressure.value}</li>);
    });

    latestObservation = observtions[0];
  }

  return isLoaded && observtions ? (
<div>
    <Hero observation={latestObservation} mode="pressure" />
    <ol>
      {items}
    </ol>
</div>
  ) : (<Skeleton variant="rectangular" width={210} height={118} />)
};

export default Pressure;
