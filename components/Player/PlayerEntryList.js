import { VStack } from "@chakra-ui/layout";
import React from "react";
import PlayerEntry from "./PlayerEntry";

export default function PlayerEntryList({
  players = [],
  setTeamPlayers,
  teamPlayers,
}) {
  return (
    <VStack spacing={3}>
      {players.map((player) => {
        return (
          <PlayerEntry
            name={player.name}
            pos={player.pos}
            team={player.team}
            teamPlayers={teamPlayers}
            setTeamPlayers={setTeamPlayers}
          ></PlayerEntry>
        );
      })}
    </VStack>
  );
}
