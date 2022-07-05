import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Box, Button, Divider, Heading, Text } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import { auth, Providers } from "../../config/firebase";
import Center from "../utils/Center";

interface Props {}

const AuthContainer = (props: Props) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const signInWithGoogle = () => {
    setDisabled(true);
    signInWithPopup(auth, Providers.google)
      .then(() => {
        setDisabled(false);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.code + ": " + error.message);
        setDisabled(false);
      });
  };

  return (
    <Center height={"auto"}>
      <Box
        width="full"
        height="full"
        padding={3}
        border={1}
        borderStyle="solid"
        borderRadius={5}
      >
        <Heading size="lg">Sign In</Heading>
        <Divider mt={3} mb={3} />
        <Text>SignIn with your Google account to get started.</Text>
        <Divider mt={3} mb={3} />
        <Button
          size="large"
          padding={3}
          leftIcon={<FcGoogle />}
          disabled={disabled}
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </Button>
        <Text sx={{ mt: 2 }} color={"red"}>
          {errorMessage}
        </Text>
      </Box>
    </Center>
  );
};

export default AuthContainer;
