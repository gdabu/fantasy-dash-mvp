import React from "react";
import CardTitled from "./CardTitled";
import RadarChart from "../Charts/RadarChart";

export default function CardChart() {
  return (
    <CardTitled title="chart">
      <RadarChart></RadarChart>
    </CardTitled>
  );
}
