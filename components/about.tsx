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
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} p={100} >
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
          <Text color="black" fontSize={{ base: "14px", md: "18px" }} whiteSpace="pre-line">
            Hello! I'm Pranav Balabhadra, and I'm a junior at Case Western Reserve University 
            pursuing degrees in Computer Science and Biomedical Engineering.  
            I'm particularly interested in the fields of Artificial Intelligence and Machine Learning. 
            I'm actively seeking opportunities in AI, ML, and Software Engineering, eager to contribute to cutting-edge developments. 
            Beyond coding, I'm deeply committed to leveraging technology's transformative power in the biomedical industry. 
          </Text>
        </Box>
        <Divider orientation="horizontal" />
        <Heading fontSize='3xl' color='white'>My Skills:</Heading>
        <HStack>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="8%" height="8%"/>
          <img src="https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" alt="pytorch" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg" alt="tensorflow" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-plain.svg" alt="c++" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/matlab/matlab-original.svg" alt="matlab" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="8%" height="8%"/>
          <img src="https://i.ibb.co/r0G2hsh/image.jpg" alt="flask" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="aws" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="postgresql" width="8%" height="8%" />
          <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="8%" height="8%"/>
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="8%" height="8%"/>
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
    <Heading pl={100} pt={5} pb={5} fontSize='3xl' color='white'>My Interests:</Heading>
    <HStack pl={100} pr={100} spacing={3} justifyContent="flex-start" alignItems="center" width="100%">
      <Box bg='tomato' w='100%' p={4} color='white' borderRadius="md">
        <Heading fontSize='1xl' textAlign="center"> Artificial Intelligence</Heading>
      </Box>
      <Box bg='orange' w='100%' p={4} color='white' borderRadius="md">
        <Heading fontSize='1xl' textAlign="center">Machine Learning</Heading>
      </Box>
      <Box bg='green' w='100%' p={4} color='white' borderRadius="md">
        <Heading fontSize='1xl' textAlign="center">Computer Vision</Heading>
      </Box>
      <Box bg='blue' w='100%' p={4} color='white' borderRadius="md" >
        <Heading fontSize='1xl' textAlign="center">Image Processing</Heading>
      </Box>
    </HStack>
  </>
);

export default About;