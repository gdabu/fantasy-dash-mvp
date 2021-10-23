import Head from "next/head";

import NavbarMain from "../components/Navbars/SearchBar/NavbarMain";
import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";

import CardTeam from "../components/Card/CardTeam";
import CardChart from "../components/Card/CardChart";
import CardStats from "../components/Card/CardStats";
import CardOverall from "../components/Card/CardOverall";
import { useDisclosure } from "@chakra-ui/hooks";
import SearchModalPlayer from "../components/Search/SearchModalPlayer";
import { useEffect, useState } from "react";
import TeamContext from "../components/Context/TeamContext";

import { getStatsStdDeviation } from "../util/calculations";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [teamPlayers, setTeamPlayers] = useState([]);

  // useEffect(() => {
  //   getStatsStdDeviation(DATA_PLAYERS);
  // }, []);

  return (
    <>
      <Head>
        <title>FantasyDash</title>
        <meta
          name="description"
          content="Fantasy Dash | Quickly analyze your NBA fantasy team stats"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <TeamContext>
        <SearchModalPlayer
          isOpen={isOpen}
          onClose={onClose}
        ></SearchModalPlayer>

        <Container as="main" maxW="1600px">
          <NavbarMain openModal={onOpen}></NavbarMain>
          <Grid
            p={5}
            h="100vh"
            templateRows={[null, null, "repeat(2, 1fr)"]}
            templateColumns={[null, null, "repeat(3, 1fr)"]}
            gap={4}
          >
            <GridItem rowSpan={2} colSpan={1} maxW={"100%"}>
              <CardTeam></CardTeam>
            </GridItem>
            <GridItem colSpan={1} maxW={"100%"}>
              <CardChart />
            </GridItem>
            <GridItem rowSpan={2} colSpan={1} maxW={"100%"}>
              <CardStats></CardStats>
            </GridItem>
            <GridItem colSpan={1} maxW={"100%"}>
              <CardOverall></CardOverall>
            </GridItem>
          </Grid>
        </Container>
      </TeamContext>
    </>
  );
}
