import React from 'react';
import {
    ChakraProvider,
    theme,
  } from "@chakra-ui/react"
import { motion } from "framer-motion";
import '../App.css';
import { Helmet } from "react-helmet";

const Home: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
        <div>
        <h1>Welcome to the Home Page!</h1>
        {/* Your home page content goes here */}
        </div>
    </ChakraProvider>
  );
};

export default Home;