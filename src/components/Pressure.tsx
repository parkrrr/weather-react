import { Card, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Feature, ObservationResponse } from "../weather.types";

const Pressure = (props: { observations: ObservationResponse | undefined, loaded: boolean, error: any }) => {

  let { stationId } = useParams();

  const [isLoaded, setIsLoaded] = useState(props.loaded);

  useEffect(() => { setIsLoaded(props.loaded); }, [props.loaded]);

  let observtions: Feature[] | undefined = props.observations?.features;
  const items: any[] = []

  if (observtions) {

    observtions.sort(function (a, b) {
      return new Date(b.properties.timestamp).getTime() - new Date(a.properties.timestamp).getTime();
    });

    observtions?.forEach((obs) => {
      items.push(<li key={obs.id}>{obs.properties.timestamp} - {obs.properties.barometricPressure.value}</li>);
    });
  }

  return isLoaded && observtions ? (
    <ol>
      {items}
    </ol>
  ) : (<Skeleton variant="rectangular" width={210} height={118} />)
};

export default Pressure;
