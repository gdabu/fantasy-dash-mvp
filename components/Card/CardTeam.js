import { Flex, VStack } from "@chakra-ui/layout";
import React from "react";
import CardTitled from "./CardTitled";
import PlayerEntryList from "../Player/PlayerEntryList";

import { useTeamContext } from "../Context/TeamContext";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";

export default function CardTeam({ teamPlayers = [] }) {
  const teamRoster = useTeamContext();
  return (
    <CardTitled title="TEAM">
      <PlayerEntryList
        players={teamRoster}
        playerButton="REMOVE"
      ></PlayerEntryList>
    </CardTitled>
  );
}
