import { Box, Divider, Heading } from "@chakra-ui/layout";
import React from "react";

export default function CardTitled({ title, children }) {
  return (
    <Box p={3} border="1px" borderColor="gray.100" borderRadius={5}>
      <Heading as="h2" size="md" style={{ textTransform: "uppercase" }}>
        {title}
      </Heading>
      <Divider mt={3} mb={5}></Divider>
      <Box>{children}</Box>
    </Box>
  );
}
