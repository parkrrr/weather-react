import { Card, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ObservationResponse } from "../weather.types";

const Pressure = (props: { observations: ObservationResponse | undefined, loaded: boolean, error: any}) => {

  let { stationId } = useParams();
  console.debug(`loaded: ${props.loaded}`);
  console.log(props.observations);

  const [isLoaded, setIsLoaded] = useState(props.loaded);

  useEffect(() => {
    setIsLoaded(props.loaded);
}, [props.loaded]);

  return isLoaded ? (<Card variant="outlined">{stationId}</Card>) : (<Skeleton variant="rectangular" width={210} height={118} />) 
};

export default Pressure;
