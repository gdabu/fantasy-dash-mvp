import { Text } from "@chakra-ui/layout";
import React from "react";
import CardTitled from "./CardTitled";

import { useTeamOverallScoreContext } from "../Context/TeamContext";

export default function CardOverall() {
  const teamOverallScore = useTeamOverallScoreContext();

  return (
    <CardTitled title="overall score">
      <Text fontSize="6xl">{teamOverallScore}</Text>
    </CardTitled>
  );
}
