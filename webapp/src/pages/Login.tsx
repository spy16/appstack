import React from "react";
import AuthContainer from "../components/auth/AuthContainer";
import Center from "../components/utils/Center";

interface Props {}

const Login = (props: Props) => {
  return (
    <Center height={90}>
      <AuthContainer />
    </Center>
  );
};

export default Login;
