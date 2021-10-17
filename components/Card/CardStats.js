import { Flex, HStack, SimpleGrid } from "@chakra-ui/layout";
import { useRadioGroup } from "@chakra-ui/radio";
import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import React, { useEffect, useState } from "react";
import { RadioButton } from "../Radio/RadioButton";
import CardTitled from "./CardTitled";

export default function CardStats() {
  const [statDisplayType, setStatDisplayType] = useState("SCORE");

  const options = ["SCORE", "AVERAGE"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "stat type",
    defaultValue: statDisplayType,
  });

  const group = getRootProps();

  return (
    <CardTitled title="stats">
      <HStack {...group}>
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
          <StatNumber>{statDisplayType === "SCORE" ? 12 : 50}</StatNumber>
          <StatLabel>Points</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>{statDisplayType === "SCORE" ? 12 : 50}</StatNumber>
          <StatLabel>Points</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>{statDisplayType === "SCORE" ? 12 : 50}</StatNumber>
          <StatLabel>Points</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>{statDisplayType === "SCORE" ? 12 : 50}</StatNumber>
          <StatLabel>Points</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>{statDisplayType === "SCORE" ? 12 : 50}</StatNumber>
          <StatLabel>Points</StatLabel>
        </Stat>
        <Stat p={2}>
          <StatNumber>{statDisplayType === "SCORE" ? 12 : 50}</StatNumber>
          <StatLabel>Points</StatLabel>
        </Stat>
      </SimpleGrid>
    </CardTitled>
  );
}
