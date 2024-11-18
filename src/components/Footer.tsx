import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box
        as="footer"
        py={4}
        textAlign="center"
        bg="#ffffff"
        color="black"
        bottom={0}
        minHeight={"fit-content"}
      >
        <Text>
          &copy; {new Date().getFullYear()} Trenitalia. Progetto realizzato da
          Chiara Ferrara.
        </Text>
      </Box>
      <Box width={"100%"} height={"20px"} bg={"red"}></Box>
    </>
  );
}
