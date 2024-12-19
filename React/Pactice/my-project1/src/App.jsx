import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack, Center } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react"

function App() {
  return (
    <Flex minH="100dvh">
      <Box bg="bg.muted" w="260px">
        <Stack>
          <Flex>
            <IconButton aria-label="Search database">
              
            </IconButton>
          </Flex>
          <Box></Box>
          <Box></Box>
        </Stack>
      </Box>
      <Stack h="full">
        <Box>Top</Box>
        <Center flexGrow="1">middle</Center>
        <Box>bottom</Box>
      </Stack>
    </Flex>
  );
}

export default App;
