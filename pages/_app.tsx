import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider, Container } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <MantineProvider
        theme={{
          components: {
            Container: {
              defaultProps: {
                sizes: {
                  xs: 540,
                  sm: 720,
                  md: 960,
                  lg: 1140,
                  xl: 1320,
                },
              },
            },
          },
        }}
      >
        <Container size="sm">
          <Component {...pageProps} />
        </Container>
      </MantineProvider>
    </>
  );
}
