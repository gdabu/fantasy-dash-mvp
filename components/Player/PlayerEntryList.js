import { VStack } from "@chakra-ui/layout";
import React from "react";
import PlayerEntry from "./PlayerEntry";

export default function PlayerEntryList({
  players = [],
  playerButton = "ADD",
  disablePlayers = false,
}) {
  return (
    <VStack spacing={3}>
      {players.map((player) => {
        return (
          <PlayerEntry {...player} playerButton={playerButton}></PlayerEntry>
        );
      })}
    </VStack>
  );
}
