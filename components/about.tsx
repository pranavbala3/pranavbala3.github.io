import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  Divider,
  HStack,
} from "@chakra-ui/react";
import React from "react";


const About = () => (
  <>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} padding={100}>
    <Stack spacing={4}>
        <Heading color="white" fontSize="6xl">
          About Me
        </Heading>
        <Box
          bg="white"
          p={4}
          borderRadius="md"
          boxShadow="md"
          padding="30px"
        >
          <Text fontSize={{ base: "14px", md: "18px" }} whiteSpace="pre-line">
          Hello! 👋 I'm Pranav Balabhadra, and I'm a a junior at Case Western Reserve University 
          pursuing degrees in Computer Science and Biomedical Engineering.  
          I'm particularly interested in the fields of Artificial Intelligence and Machine Learning. 
          I'm actively seeking opportunities in AI, ML, and Software Engineering, eager to contribute to cutting-edge developments. 
          Beyond coding, I'm deeply committed to leveraging technology's transformative power in the biomedical industry. 
          </Text>
        </Box>
        <Divider orientation="horizontal" />
        <Heading fontSize='3xl' color='white'>My Skills:</Heading>
          <HStack>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-plain.svg" alt="c++" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg" alt="matlab" width="40" height="40"/>
          <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="pytorch" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" alt="aws" width="40" height="40"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="postgresql" width="40" height="40" />
          </HStack>
      </Stack>
      <Stack align="center" spacing={4}>
        <Box/>
        <Flex
          alignItems="center"
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