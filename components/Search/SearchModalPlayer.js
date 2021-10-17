import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useEffect, useState } from "react";
import PlayerEntry from "../Player/PlayerEntry";
import PlayerEntryList from "../Player/PlayerEntryList";
import SearchInputPlayer from "./SearchInputPlayer";
import { useDebounce } from "@react-hook/debounce";
import DATA_PLAYERS from "../../data/players.js";

export default function SearchModalPlayer({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useDebounce("", 500);
  const [resultPlayers, setResultPlayers] = useState(DATA_PLAYERS.slice(0, 20));

  useEffect(() => {
    if (searchQuery === "") {
      setResultPlayers(DATA_PLAYERS.slice(0, 20));
      return;
    }

    const searchResults = DATA_PLAYERS.filter((player) => {
      return player.name?.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setResultPlayers(searchResults);
  }, [searchQuery]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <SearchInputPlayer
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          ></SearchInputPlayer>
        </ModalHeader>
        <ModalBody>
          <PlayerEntryList players={resultPlayers}></PlayerEntryList>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
