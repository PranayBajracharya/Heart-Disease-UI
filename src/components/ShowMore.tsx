import { Box, Flex } from "@chakra-ui/layout";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/accordion";
import { ReactNode, useState } from "react";
import { BsPlusCircleFill, BsPlusCircle } from "react-icons/bs";
import { FormLabel, Icon } from "@chakra-ui/react";

function Label(props: { children: ReactNode }) {
  const { children } = props;

  return <FormLabel>{children}</FormLabel>;
}

export function ShowMore(props: { message?: string; children: ReactNode }) {
  const { message, children } = props;
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
          {message}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

ShowMore.Label = Label;
