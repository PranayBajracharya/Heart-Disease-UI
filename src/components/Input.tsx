import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function CustomeInput(props: any) {
  const { label } = props;
  return (
    <FormControl
      border="2px solid #ddd"
      borderRadius="1rem"
      px="2rem"
      py="1.6rem"
      bg="white"
    >
      <FormLabel>{label}</FormLabel>
      {props.children}
    </FormControl>
  );
}
