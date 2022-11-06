import { Box, Button, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../pages/style/home.module.css";
import { logoutFun } from "../redux/AuthReducer/action";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const handleLogout = () => {
    dispatch(logoutFun());
    toast({
      title: "Logout Successful.",
      description: "You've logged out Successfully.",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "top",
    });
    navigate("/");
  };
  return (
    <Box className={style.nav}>
      <Text fontSize={"2xl"}>FacePrep Assignment</Text>
      <Button colorScheme={"teal"} onClick={handleLogout}>
        LOGOUT
      </Button>
    </Box>
  );
};

export default Navbar;
