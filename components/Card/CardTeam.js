import { Flex, VStack } from "@chakra-ui/layout";
import React from "react";
import CardTitled from "./CardTitled";
import PlayerEntryList from "../Player/PlayerEntryList";

export default function CardTeam({ teamPlayers = [] }) {
  return (
    <CardTitled title="TEAM">
      <PlayerEntryList players={teamPlayers}></PlayerEntryList>
    </CardTitled>
  );
}
