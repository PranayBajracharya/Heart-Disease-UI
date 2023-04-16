import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { ReactNode } from "react";
import { ShowMore } from "./ShowMore";

export default function CustomInput(props: {
  label: string;
  children: ReactNode;
  accordion?: ReactNode;
  error?: string;
  isRequired?: boolean;
}) {
  const { label, error, isRequired = false } = props;

  return (
    <FormControl
      border="2px solid #ddd"
      borderRadius="1rem"
      px="2rem"
      py="1.6rem"
      bg="white"
      isInvalid={!!error}
    >
      <ShowMore>
        <FormLabel>
          {label}
          {isRequired && (
            <span
              role="presentation"
              aria-hidden="true"
              style={{ color: "red" }}
            >
              &nbsp;*
            </span>
          )}
        </FormLabel>
      </ShowMore>
      {props.children}
      <FormErrorMessage>{!!error && error}</FormErrorMessage>
    </FormControl>
  );
}
