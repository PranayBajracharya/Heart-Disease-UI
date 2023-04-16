import {
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
} from "@chakra-ui/react";

export default function Submit() {
  return (
    <Flex
      gap={4}
      alignItems="center"
      position="fixed"
      right="4rem"
      top="1rem"
      zIndex="100"
    >
      <CircularProgress
        display="flex"
        alignItems="center"
        value={40}
        size={12}
        color="purple.400"
      >
        <CircularProgressLabel fontSize="0.8rem">10/12</CircularProgressLabel>
      </CircularProgress>
      <Button
        type="submit"
        width="max-content"
        colorScheme="purple"
        isDisabled={false}
      >
        Submit
      </Button>
    </Flex>
  );
}
