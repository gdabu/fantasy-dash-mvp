import React from "react";
import { Radar } from "react-chartjs-2";

import { useTeamStatsContext } from "../Context/TeamContext";

const data = {
  labels: [
    "Points",
    "3Pts",
    "Assists",
    "Rebounds",
    "Steals",
    "Blocks",
    "FT%",
    "FG%",
    "Turnovers",
  ],
  datasets: [
    {
      label: "stats",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [50, 60, 50, 60, 50, 60, 50, 60, 70],
    },
  ],
};

export default function RadarChart() {
  const teamStats = useTeamStatsContext();
  return (
    <Radar
      data={{
        labels: [
          "Points",
          "3Pts",
          "Assists",
          "Rebounds",
          "Steals",
          "Blocks",
          "FG%",
          "FT%",

          "Turnovers",
        ],
        datasets: [
          {
            label: "stats",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "rgba(179,181,198,1)",
            pointBackgroundColor: "rgba(179,181,198,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [
              teamStats.ptsScore,
              teamStats.thrPtScore,
              teamStats.astScore,
              teamStats.rebScore,
              teamStats.stlScore,
              teamStats.blkScore,
              teamStats.fgScore,
              teamStats.ftScore,
              teamStats.toScore,
            ],
          },
        ],
      }}
      width={400}
      height={400}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            angleLines: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      }}
    />
  );
}
