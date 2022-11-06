import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import style from "../pages/style/home.module.css";
const Contact = ({ el }) => {
  return (
    <Box className={style.contact}>
      {el.name.title === "Mr" ? (
        <Image
          className={style.image}
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_960_720.png"
        />
      ) : (
        <Image
          className={style.image}
          src="https://thumbs.dreamstime.com/b/vector-illustration-avatar-dummy-logo-set-image-stock-isolated-object-icon-collection-137161298.jpg"
        />
      )}

      <Text className={style.text}>
        {el.name.title} {el.name.first} {el.name.last}
      </Text>
    </Box>
  );
};

export default Contact;
