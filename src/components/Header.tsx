import { Heading, Stack } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Stack
      position="fixed"
      w="100%"
      px="5rem"
      py={5}
      zIndex="100"
      borderBottom="1px solid"
      borderColor="purple.400"
      bg="inherit"
    >
      <Heading as="h1">Heart Disease Prediction</Heading>
    </Stack>
  );
};

export default Header;
