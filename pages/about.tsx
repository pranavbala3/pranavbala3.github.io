import { CheckIcon } from "@chakra-ui/icons";
import {
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

const About = () => (
  <>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
      <Stack spacing={4}>
        <Heading fontSize="5xl">About Me</Heading>
        <Box
          bg="#322659"
          p={4}
          borderRadius="md"
          boxShadow="md"
          padding="30px"
        >
          <Text fontSize={{ base: "14px", md: "18px" }} whiteSpace="pre-line">
            Hey there👋 I'm Taran Anantasagar, and I'm currently a student at
            the University of Pennsylvania pursuing BSE and MSE degrees in
            Computer Science, with minors in Mathematics and Statistics. I'm
            passionate about building products that make a difference in
            people's lives, and I'm currently looking for software engineering
            internships for Summer 2024.
            <br />
            <br />
            Outside of class, you can find me:
          </Text>
          <List spacing={1} mt={2} ml={10} styleType="disc">
            <ListItem>
              {"  "} Building software for social good with{" "}
              <Link href="https://hack4impact.org" color="#5CA4FF" isExternal>
                Hack4Impact
              </Link>{" "}
              🌟 (see some of my projects below!) as a developer lead
            </ListItem>

            <ListItem>
              {"  "} Developing the{" "}
              <Link
                href="https://pennlabs.org/products/penn-mobile"
                color="#5CA4FF"
                isExternal
              >
                Penn Mobile
              </Link>{" "}
              🚀 application, which is used by over 10,000 students at Penn
            </ListItem>
            <ListItem>
              {"  "} Teaching data structures and algorithms as a{" "}
              <Link
                href="https://www.cis.upenn.edu/~cis1210/current/index.html"
                color="#5CA4FF"
                isExternal
              >
                CIS 1210
              </Link>{" "}
              TA 🧑‍🏫
            </ListItem>
          </List>
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
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.1)"
              position="absolute"
              top={-8}
              right={-12}
              zIndex={0}
              w={{ base: "100px", lg: "150px" }}
              alt="" />
            <Image
              src="https://i.ibb.co/qdk0kqM/linkd.jpg"
              position="relative"
              zIndex={2}
              fallbackSrc="https://via.placeholder.com/150"
              w={{ base: "300px", lg: "350px" }}
              h={{ base: "300px", lg: "350px" }}
              borderRadius="50px"
              alt="Taran Anantasagar" />
          </Box>
        </Flex>
      </Stack>
    </SimpleGrid>
  </>
);

export default About;