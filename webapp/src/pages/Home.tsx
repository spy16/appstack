import React from "react";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { auth } from "../config/firebase";
import Logout from "../components/auth/Logout";
import { Header } from "../components/utils/Header";
import { Logo } from "../components/utils/Logo";
import { ColorToggle } from "../components/utils/ColorToggle";

interface Props {}

const Home = (props: Props) => {
  const user = auth.currentUser;

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
        <Logout />
      </HStack>
    );
  };

  return (
    <Box width="full" height="full" alignContent="center">
      <Header Left={leftView()} Right={rightView()} />

      <Flex width="full" height="full" justifyContent="center">
        <VStack
          mt={10}
          width="300px"
          padding={3}
          border={1}
          borderStyle="solid"
          borderColor="gray.100"
          borderRadius={5}
        >
          <Avatar src={user?.photoURL?.toString()} />
          <Heading size="md">{user?.displayName}</Heading>
          <Text>{user?.email}</Text>
          <Text>
            Logged in via{" "}
            <span style={{ fontStyle: "italic" }}>{user?.providerId}</span>
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default Home;
