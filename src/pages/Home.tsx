import React from "react";
import { Heading, HStack, VStack } from "@chakra-ui/react";

import { Header } from "../components/utils/Header";
import { Logo } from "../components/utils/Logo";
import { ColorToggle } from "../components/utils/ColorToggle";

interface Props {}

const Home = (props: Props) => {
  const leftView = () => {
    return (
      <HStack>
        <Logo />
        <Heading size="sm">appstack</Heading>
      </HStack>
    );
  };

  const rightView = () => {
    return (
      <HStack>
        <ColorToggle />
      </HStack>
    );
  };

  return (
    <VStack width="full" height="100vh" alignContent="center">
      <Header Left={leftView()} Right={rightView()} />
    </VStack>
  );
};

export default Home;
