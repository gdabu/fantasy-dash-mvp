import { Button } from "@chakra-ui/button";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import SearchInputPlayer from "../../Search/SearchInputPlayer";
import { SearchBar } from "../SearchBar/SearchBar";

export default function NavbarMain({ openModal }) {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      p={2}
      pr={5}
      pl={5}
      borderBottom="1px"
      borderColor="gray.100"
    >
      <Box>
        <Heading as="h1" size="sm">
          Fantasy Dash
        </Heading>
      </Box>
      <Box w="200px" maxW="50%">
        <Button
          rightIcon={<AddIcon></AddIcon>}
          colorScheme="teal"
          w="100%"
          size="lg"
          onClick={() => {
            openModal();
          }}
        >
          ADD PLAYER
        </Button>
      </Box>
    </Flex>
  );
}
