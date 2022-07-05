import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, Tooltip } from "@chakra-ui/react";

import { FiLogOut } from "react-icons/fi";

import { auth } from "../../config/firebase";

interface Props {
  navigateTo?: string;
}

const Logout = ({ navigateTo = "/login" }: Props) => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setDisabled(true);
    signOut(auth)
      .then(() => {
        navigate(navigateTo);
      })
      .catch((error) => {
        console.error(error);
        setDisabled(false);
      });
  };

  return (
    <div>
      <Tooltip label="Logout">
        <IconButton
          aria-label="Logout"
          icon={<FiLogOut />}
          disabled={disabled}
          onClick={logout}
        />
      </Tooltip>
    </div>
  );
};

export default Logout;
