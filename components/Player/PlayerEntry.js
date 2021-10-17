import { Avatar } from "@chakra-ui/avatar";
import { IconButton } from "@chakra-ui/button";
import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

export default function PlayerEntry({
  name,
  pos,
  team,
  teamPlayers,
  setTeamPlayers,
}) {
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
          setTeamPlayers(teamPlayers.concat([{ name, pos: pos, team: team }]));
        }}
      >
        <IconButton
          colorScheme="red"
          aria-label="Remove Player"
          icon={<DeleteIcon />}
        ></IconButton>
      </Box>
    </Flex>
  );
}
