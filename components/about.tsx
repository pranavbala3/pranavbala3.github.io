import { CheckIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  Button,
  useDisclosure,
  Link,
  Fade,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Layout from "./Layout";

const About = () => (
  <>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} padding={100}>
      <Stack spacing={4}>
        <Heading color="white" fontSize="5xl">About Me</Heading>
        <Box
          bg="white"
          p={4}
          borderRadius="md"
          boxShadow="md"
          padding="30px"
        >
          <Text fontSize={{ base: "14px", md: "18px" }} whiteSpace="pre-line">
            Hey there 👋 I'm Pranav Balabhadra, and I'm currently a student at
            Case Western Reserve University pursuing Computer Science and Biomedical
            Engineering.
          </Text>
        </Box>
      </Stack>
      <Stack align="center" spacing={4}>
        <Box height="64px" />
        <Flex
          alignItems="center"
          height="100%"
          justifyContent="center"
          position="relative"
        >
          <Box
            maxW={{ base: "300px", lg: "350px" }}
            maxH={{ base: "300px", lg: "350px" }}
            position="relative"
          >
            <Image
              src="https://i.ibb.co/Gddn6VB/headshot.jpg"
              position="relative"
              zIndex={2}
              fallbackSrc="https://via.placeholder.com/150"
              borderRadius="50px"
              alt="Pranav" />
          </Box>
        </Flex>
      </Stack>
    </SimpleGrid>
  </>
);

export default About;