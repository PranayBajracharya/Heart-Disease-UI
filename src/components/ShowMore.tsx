import { Box, Flex } from "@chakra-ui/layout";
import { Accordion, AccordionItem, AccordionPanel } from "@chakra-ui/accordion";
import { ReactNode, useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";

export function ShowMore(props: { children: ReactNode }) {
  const { children } = props;
  const [show, setShow] = useState(-1);

  const handleShowMore = () => {
    setShow((p) => {
      if (p === -1) {
        return 0;
      }
      return -1;
    });
  };

  return (
    <Accordion allowToggle index={show}>
      <AccordionItem border="none">
        <Flex w="100%" alignItems="center">
          <Box flex="1">{children}</Box>
          <IconButton
            onClick={() => handleShowMore()}
            p={0}
            bg="inherit"
            aria-label="Show more"
            icon={<BsPlusCircle />}
            color="purple.400"
          />
        </Flex>
        <AccordionPanel pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
