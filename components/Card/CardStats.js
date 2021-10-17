import { Flex, HStack, SimpleGrid } from "@chakra-ui/layout";
import { useRadioGroup } from "@chakra-ui/radio";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import React, { useEffect, useState } from "react";
import { RadioButton } from "../Radio/RadioButton";
import CardTitled from "./CardTitled";

import styles from "./CardStats.module.css";

import { useTeamStatsContext } from "../Context/TeamContext";

export default function CardStats() {
  const [statDisplayType, setStatDisplayType] = useState("SCORE");

  const options = ["SCORE", "AVERAGE"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "stat type",
    defaultValue: statDisplayType,
  });

  const group = getRootProps();

  const teamStats = useTeamStatsContext();

  return (
    <CardTitled title="stats">
      <HStack {...group} className={styles.containerRadioToggle}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioButton
              key={value}
              {...radio}
              changeHandler={() => {
                setStatDisplayType(value);
              }}
            >
              {value}
            </RadioButton>
          );
        })}
      </HStack>

      <SimpleGrid columns={[2, 1, 1, 3, 4]}>
        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE" ? teamStats.ptsScore : teamStats.pts}
          </StatNumber>
          <StatLabel>Points</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE"
              ? teamStats.thrPtScore
              : teamStats.thrPt}
          </StatNumber>
          <StatLabel>3 Points</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE" ? teamStats.astScore : teamStats.ast}
          </StatNumber>
          <StatLabel>Assists</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE" ? teamStats.rebScore : teamStats.reb}
          </StatNumber>
          <StatLabel>Rebounds</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE" ? teamStats.stlScore : teamStats.stl}
          </StatNumber>
          <StatLabel>Steals</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE" ? teamStats.blkScore : teamStats.blk}
          </StatNumber>
          <StatLabel>Blocks</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE" ? teamStats.fgScore : teamStats.fg}
          </StatNumber>
          <StatLabel>Field Goals %</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE" ? teamStats.ftScore : teamStats.ft}
          </StatNumber>
          <StatLabel>Free Throw %</StatLabel>
        </Stat>

        <Stat p={2}>
          <StatNumber>
            {statDisplayType === "SCORE" ? teamStats.toScore : teamStats.to}
          </StatNumber>
          <StatLabel>Turn overs</StatLabel>
        </Stat>
      </SimpleGrid>
    </CardTitled>
  );
}
