import * as React from "react"
import {
  ChakraProvider,
  Box,
  Code,
  Grid,
  theme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import IdCardGenerator from "./components/IdCardGenerator"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="10vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Code fontSize="xl" variant="solid"># TODO: about-me</Code>
        <IdCardGenerator />
      </Grid>
    </Box>
  </ChakraProvider>
)
