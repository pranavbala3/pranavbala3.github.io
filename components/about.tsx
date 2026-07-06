import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Box,
  Wrap,
  WrapItem,
  Badge,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const skills = ["Python", "Kotlin", "TypeScript", "C++", "SQL", "PyTorch", "TensorFlow", "Kubernetes", "AWS", "GCP", "LangChain", "CUDA"];
const interests = ["AI systems", "Applied ML", "AI research", "Cloud infrastructure"];

const About = ({ isDarkMode = true }: { isDarkMode?: boolean }) => (
  <Box id="about" px={{ base: 6, md: 12, lg: 20 }} py={{ base: 16, md: 24 }} maxW="1400px" mx="auto">
    <Stack spacing={6}>
      <Box>
        <Badge colorScheme="purple" variant="subtle" px={3} py={1} rounded="full">About Me</Badge>
        <Heading color={isDarkMode ? "white" : "gray.800"} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mt={4}>
          Building AI systems that are practical, useful, and grounded in real-world impact.
        </Heading>
      </Box>

      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8}>
        <Stack spacing={4}>
          <Box
            bg={isDarkMode ? "whiteAlpha.100" : "white"}
            border="1px solid"
            borderColor={isDarkMode ? "whiteAlpha.200" : "gray.200"}
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            boxShadow="0 20px 60px rgba(0,0,0,0.28)"
          >
            <Text color={isDarkMode ? "gray.300" : "gray.700"} fontSize={{ base: "2xl", md: "lg" }} lineHeight="1.8" overflowWrap="anywhere">
              I’m Pranav Balabhadra, a software engineer at Amazon building AI-powered developer tooling and scalable intelligence systems.
              My work sits at the intersection of applied machine learning, cloud infrastructure, and practical product engineering, with a strong focus on AI research and responsible AI.
            </Text>
          </Box>

          <Box
            bg={isDarkMode ? "rgba(15, 23, 42, 0.7)" : "rgba(255, 255, 255, 0.95)"}
            border="1px solid"
            borderColor={isDarkMode ? "whiteAlpha.200" : "gray.200"}
            p={{ base: 6, md: 8 }}
            rounded="2xl"
          >
            <Heading as="h3" color={isDarkMode ? "white" : "gray.800"} fontSize="lg" mb={4}>Core Skills</Heading>
            <Wrap spacing={3}>
              {skills.map((skill) => (
                <WrapItem key={skill}>
                  <Badge colorScheme="blue" variant="solid" px={3} py={1.5} rounded="full">
                    {skill}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </Stack>

        <VStack spacing={4} align="stretch">
          <Box
            border="1px solid"
            borderColor="whiteAlpha.200"
            rounded="2xl"
            overflow="hidden"
            bg={isDarkMode ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(34,211,238,0.12))" : "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(34,211,238,0.08))"}
          >
            <Image
              src="https://i.ibb.co/Gddn6VB/headshot.jpg"
              alt="Pranav"
              objectFit="cover"
              objectPosition="center 32%"
              h={{ base: "340px", md: "430px" }}
              w="100%"
            />
          </Box>

          <Box
            bg={isDarkMode ? "rgba(15, 23, 42, 0.7)" : "rgba(255, 255, 255, 0.95)"}
            border="1px solid"
            borderColor={isDarkMode ? "whiteAlpha.200" : "gray.200"}
            p={{ base: 6, md: 8 }}
            rounded="2xl"
          >
            <Heading as="h3" color={isDarkMode ? "white" : "gray.800"} fontSize="lg" mb={4}>Current Interests</Heading>
            <Wrap spacing={3}>
              {interests.map((interest) => (
                <WrapItem key={interest}>
                  <Badge colorScheme="cyan" variant="subtle" px={3} py={1.5} rounded="full">
                    {interest}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>
          </Box>
        </VStack>
      </SimpleGrid>
    </Stack>
  </Box>
);

export default About;