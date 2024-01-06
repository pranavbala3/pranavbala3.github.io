import React from "react";
import {
    SimpleGrid,
    Icon,
    Button,
    Text,
    Stack,
    Heading,
    Image,
    Flex,
    Box,
    Divider,
    VStack,
    HStack,
  } from "@chakra-ui/react";

  
  const Experience = () => (
    <>
        <VStack p={100} alignItems="left">
            <HStack>
            <Heading color="white" fontSize="6xl" pb={3}> Experience </Heading>
            <Box
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="md"
            padding="30px"
            width="50%"
            >
                <Text fontSize={{ base: "14px", md: "18px" }} whiteSpace="pre-line">
                Hello! 👋 I'm Pranav Balabhadra, and I'm a junior at Case Western Reserve University 
                pursuing degrees in Computer Science and Biomedical Engineering.  
                I'm particularly interested in the fields of Artificial Intelligence and Machine Learning. 
                I'm actively seeking opportunities in AI, ML, and Software Engineering, eager to contribute to cutting-edge developments. 
                Beyond coding, I'm deeply committed to leveraging technology's transformative power in the biomedical industry. 
                </Text>
            </Box>
            </HStack>
        </VStack>
    </>
  );

  export default Experience;