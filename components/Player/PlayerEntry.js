import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

// import TeamProvider from "../Context/TeamContext";

import {
  useTeamAdd,
  useTeamRemove,
  useTeamContext,
} from "../Context/TeamContext";

export default function PlayerEntry({
  name,
  pos,
  team,

  gp,
  mpg,
  fg,
  ft,
  thrPt,
  pts,
  reb,
  ast,
  stl,
  blk,
  to,
  teamPlayers,
  setTeamPlayers,
  playerButton,
}) {
  const teamContext = useTeamContext();
  const addPlayer = useTeamAdd();
  const removePlayer = useTeamRemove();

  const updatePlayer =
    playerButton === "ADD"
      ? (player) => {
          addPlayer(player);
        }
      : (player) => {
          removePlayer(player);
        };

  return (
    <Flex
      background="gray.100"
      borderRadius={5}
      p={3}
      alignItems="center"
      style={{ gap: "0.6rem" }}
      w="100%"
    >
      <Avatar alignSelf="flex-start"></Avatar>
      <Box alignSelf="flex-start">
        <Text fontWeight="Bold">{name}</Text>
        <Text fontSize="sm">
          {pos} | {team}
        </Text>
      </Box>
      <Box
        marginLeft="auto"
        onClick={() => {
          updatePlayer({
            name,
            pos,
            team,
            gp,
            mpg,
            fg,
            ft,
            thrPt,
            pts,
            reb,
            ast,
            stl,
            blk,
            to,
          });
        }}
      >
        <IconButton
          colorScheme={playerButton === "ADD" ? "teal" : "red"}
          aria-label={playerButton === "ADD" ? "Add Player" : "Remove Player"}
          icon={playerButton === "ADD" ? <AddIcon /> : <DeleteIcon />}
        ></IconButton>
      </Box>
    </Flex>
  );
}
