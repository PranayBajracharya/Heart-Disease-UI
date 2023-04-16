import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { ReactNode } from "react";
import { ShowMore } from "./ShowMore";

export default function CustomInput(props: {
  label: string;
  children: ReactNode;
  accordion?: ReactNode;
}) {
  const { label } = props;
  return (
    <FormControl
      border="2px solid #ddd"
      borderRadius="1rem"
      px="2rem"
      py="1.6rem"
      bg="white"
    >
      <ShowMore>
        <FormLabel>{label}</FormLabel>
      </ShowMore>
      {props.children}
    </FormControl>
  );
}
