import { useState } from "react";
import { useParams } from "react-router-dom";

function Pressure(items: any) {

  let { stationId } = useParams();
  console.log(items);

  return (
    <div>
    <h1>{stationId}</h1>
  </div>
  );
}

export default Pressure;
