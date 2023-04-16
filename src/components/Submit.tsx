import { Button, Flex } from "@chakra-ui/react";

export default function Submit({ isLoading }: { isLoading: boolean }) {
  return (
    <Flex
      gap={4}
      alignItems="center"
      position="fixed"
      right="5rem"
      top="21px"
      zIndex="100"
    >
      <Button
        type="submit"
        width="max-content"
        colorScheme="purple"
        isLoading={isLoading}
        isDisabled={false}
      >
        Submit
      </Button>
    </Flex>
  );
}
