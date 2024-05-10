import React from "react";
import {
    Link,
    Text,
    Heading,
    Box,
    VStack,
    HStack,
  } from "@chakra-ui/react";

  
  const Projects = () => (
    <>
        <VStack p={100} alignItems="left">
        <Heading color="white" fontSize="6xl" pb={3}> Projects </Heading>
            <HStack pb={10}>
                <Box
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                padding="30px"
                width="100%"
                >
                    <HStack justifyContent="space-between" alignItems="flex-start">
                        <Heading color="black" fontSize="3xl"> Furtographer </Heading>
                        <Text>Dec 2023 - Current</Text>
                    </HStack>
                    <Text fontSize={{ base: "14x", md: "16px" }} whiteSpace="pre-line">
                    Furtographer is a Flask web app that enables users to log in/register, capture/upload photos of dogs, receive dog breed classification, 
                    and store their captures in a personalized, interactive collection. This project was developed as part of a group effort for CSDS 393: 
                    Software Engineering. It entailed coordinating various components, addressing both frontend and backend requirements. Our technology 
                    stack comprised Flask web framework, HTML for frontend, and Python for backend, encompassing the training of a dog detection and classifier model. 
                    We utilized Docker for hosting a database server and SQLAlchemy for executing queries.
                    Learn more about it {' '} 
                    <Link colorScheme="brand" href="https://github.com/pranavbala3/Furtographer/tree/main">
                        <strong>here</strong>
                    </Link>
                    .
                    </Text>
                </Box>
            </HStack>
        </VStack>
    </>
  );

  export default Projects;