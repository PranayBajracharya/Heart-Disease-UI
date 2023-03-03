import { Heading, Stack, Text } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Stack px="5rem" py={5} mb="5" bg="gray.300">
      <Heading>Heart Disease</Heading>
    </Stack>
  );
};

export default Header;
