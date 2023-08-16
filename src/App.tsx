import {
  ChakraProvider,
  Box,
  theme,
  Flex,
} from "@chakra-ui/react";

import Trips from "./components/trips/Trips";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex justifyContent="center">
        <Trips />
    </Flex>
  </ChakraProvider>
);
