import { HStack, Spacer, useColorModeValue } from "@chakra-ui/react";
import React from "react";

type Props = {
  Left?: JSX.Element;
  Right?: JSX.Element;
};

export const Header: React.FC<Props> = (props) => {
  return (
    <HStack
      width="full"
      height="50px"
      bgColor={useColorModeValue("gray.100", "whiteAlpha.100")}
      padding={1}
    >
      {props.Left}
      <Spacer />
      {props.Right}
    </HStack>
  );
};
