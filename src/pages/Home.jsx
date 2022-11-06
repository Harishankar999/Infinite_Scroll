import { Box, Image, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import style from "./style/home.module.css";
import Contact from "../Components/Contact";
const Home = () => {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    await fetch(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((res) => res.json())
      .then((data) => {
        setItem((prev) => [...prev, ...data.results]);
        console.log(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 1000);
  }, [page]);
  return (
    <Box>
      <Navbar />
      <Text fontSize={"5xl"} padding="20px">
        Contact List
      </Text>
      <InfiniteScroll
        dataLength={item.length}
        next={() => setPage(page + 1)}
        hasMore={true}
        loader={<Spinner />}
      >
        {item.map((el, i) => {
          return (
            <Box key={i}>
              <Contact el={el} />
            </Box>
          );
        })}
      </InfiniteScroll>
    </Box>
  );
};

export default Home;
