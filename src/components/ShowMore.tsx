import { Box, Flex } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { ReactNode, useState } from "react";
import { BsPlusCircleFill, BsPlusCircle } from "react-icons/bs";
import { Icon } from "@chakra-ui/react";

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
          <AccordionButton
            width="2rem"
            display="flex"
            justifyContent="center"
            onClick={() => handleShowMore()}
          >
            <Icon
              p={0}
              as={show === 0 ? BsPlusCircleFill : BsPlusCircle}
              color="purple.400"
            />
          </AccordionButton>
        </Flex>
        <AccordionPanel p={0} pb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
