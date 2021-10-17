import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import React from "react";

export default function SearchInputPlayer({
  isButton = false,
  openModal,
  searchQuery,
  setSearchQuery,
}) {
  return (
    <InputGroup _hover={{ cursor: "pointer" }} onClick={openModal}>
      <Input
        size="lg"
        variant="filled"
        _hover={isButton && { cursor: "pointer" }}
        _style={
          isButton && { "caret-color": "transparent", color: "transparent" }
        }
        onChange={(e) => setSearchQuery(e.target.value)}
      ></Input>
      <InputRightElement
        children={<SearchIcon color="gray.300" mt={2} />}
      ></InputRightElement>
    </InputGroup>
  );
}
