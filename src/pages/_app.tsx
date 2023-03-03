import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Flex, Stack } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Header from "@/components/Header";
import theme from "@/styles/theme";

const Layout: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <Stack maxWidth="1000px" w="90%" marginInline="auto" flex={1}>
      {props.children}
    </Stack>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        minH="100vh"
        direction="column"
        bg="gray.200"
        // bg="gray.200"
      >
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Flex>
    </ChakraProvider>
  );
}
