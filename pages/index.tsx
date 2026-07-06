import { useEffect, useRef } from "react";
import { Button, Icon, Stack, Heading, Flex, Box, Text, Badge, SimpleGrid, useColorMode } from "@chakra-ui/react";
import { NextPage } from "next";
import { motion } from "framer-motion";
import Reveal from "../styles/Reveal";
import Layout from "../components/Layout";
import Typewriter from "typewriter-effect/dist/core";
import About from "../components/about";
import Experience from "../components/experience";
import Projects from "../components/projects";
import { FaGraduationCap, FaRocket, FaBrain, FaCode, FaLinkedin } from "react-icons/fa";

const Home: NextPage = () => {
  const titleRef = useRef<HTMLSpanElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const scrollToSection = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;

    const typewriter = new Typewriter(titleElement, {
      strings: ["a developer.", "an innovator.", "a problem solver."],
      autoStart: true,
      loop: true,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <Layout>
      <Stack spacing={0} alignItems="center" width="100%">
        <Flex minH="100vh" alignItems="center" justifyContent="center" px={{ base: 6, md: 10 }} py={{ base: 24, md: 32 }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ width: "100%" }}>
            <Box
              maxW="1200px"
              w="100%"
              p={{ base: 8, md: 12, lg: 14 }}
              rounded="3xl"
              bg={isDark ? "rgba(15, 23, 42, 0.72)" : "rgba(255, 255, 255, 0.85)"}
              border="1px solid"
              borderColor={isDark ? "whiteAlpha.200" : "gray.200"}
              boxShadow={isDark ? "0 25px 80px rgba(0,0,0,0.35)" : "0 20px 50px rgba(15, 23, 42, 0.08)"}
              position="relative"
              overflow="hidden"
            >
              <Box position="absolute" inset="0" bg="radial-gradient(circle at top right, rgba(124, 58, 237, 0.3), transparent 35%)" />
              <Stack spacing={8} position="relative" zIndex={1}>
                <Badge colorScheme="purple" variant="subtle" px={3} py={1} rounded="full" width="fit-content">
                  Software Engineer @ Amazon • AI/ML • Developer Platforms
                </Badge>
                <Heading color={isDark ? "white" : "gray.800"} fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }} lineHeight="1.05" letterSpacing={{ sm: "-1.2px", md: "-1.8px" }}>
                  Hey, I’m Pranav Balabhadra.
                  <br />
                  I’m <Box as="span" color="cyan.300" ref={titleRef} />
                </Heading>
                <Text color={isDark ? "gray.300" : "gray.600"} fontSize={{ base: "md", md: "lg" }} maxW="780px" lineHeight="1.8">
                  I build AI-powered developer tools and machine learning systems at Amazon, with experience spanning applied ML, developer platforms, and large-scale software engineering.
                </Text>
                <Stack direction={{ base: "column", sm: "row" }} spacing={4} flexWrap="wrap">
                  <Button
                    leftIcon={<Icon as={FaRocket} />}
                    colorScheme="purple"
                    onClick={() => scrollToSection(aboutRef)}
                  >
                    Explore my work
                  </Button>
                  <Button
                    as="a"
                    href="https://www.linkedin.com/in/pranav-balabhadra/"
                    target="_blank"
                    rel="noreferrer"
                    leftIcon={<Icon as={FaLinkedin} />}
                    variant="outline"
                    color={isDark ? "white" : "gray.700"}
                    borderColor={isDark ? "whiteAlpha.300" : "gray.300"}
                  >
                    LinkedIn
                  </Button>
                  <Button
                    as="a"
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    leftIcon={<Icon as={FaGraduationCap} />}
                    variant="outline"
                    color={isDark ? "white" : "gray.700"}
                    borderColor={isDark ? "whiteAlpha.300" : "gray.300"}
                  >
                    View resume
                  </Button>
                  <Button
                    leftIcon={<Icon as={FaGraduationCap} />}
                    variant="outline"
                    color={isDark ? "white" : "gray.700"}
                    borderColor={isDark ? "whiteAlpha.300" : "gray.300"}
                    onClick={() => scrollToSection(experienceRef)}
                  >
                    View my journey
                  </Button>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={4}>
                  <Box bg={isDark ? "whiteAlpha.100" : "gray.50"} p={4} rounded="xl" border="1px solid" borderColor={isDark ? "whiteAlpha.200" : "gray.200"}>
                    <Icon as={FaBrain} color="cyan.300" mb={2} />
                    <Text fontWeight="700" color={isDark ? "white" : "gray.800"}>AI & ML</Text>
                    <Text color={isDark ? "gray.400" : "gray.600"} fontSize="sm">Applied models, intelligent interfaces, and practical deployment.</Text>
                  </Box>
                  <Box bg={isDark ? "whiteAlpha.100" : "gray.50"} p={4} rounded="xl" border="1px solid" borderColor={isDark ? "whiteAlpha.200" : "gray.200"}>
                    <Icon as={FaCode} color="purple.300" mb={2} />
                    <Text fontWeight="700" color={isDark ? "white" : "gray.800"}>Software</Text>
                    <Text color={isDark ? "gray.400" : "gray.600"} fontSize="sm">Thoughtful UIs and reliable systems built with modern tools.</Text>
                  </Box>
                  <Box bg={isDark ? "whiteAlpha.100" : "gray.50"} p={4} rounded="xl" border="1px solid" borderColor={isDark ? "whiteAlpha.200" : "gray.200"}>
                    <Icon as={FaRocket} color="green.300" mb={2} />
                    <Text fontWeight="700" color={isDark ? "white" : "gray.800"}>Systems</Text>
                    <Text color={isDark ? "gray.400" : "gray.600"} fontSize="sm">Building reliable, scalable AI and ML experiences that ship to real users.</Text>
                  </Box>
                </SimpleGrid>
              </Stack>
            </Box>
          </motion.div>
        </Flex>

        <Box ref={aboutRef} w="100%" pt={{ base: 2, md: 4 }}>
          <Reveal index={2}>
            <About isDarkMode={isDark} />
          </Reveal>
        </Box>

        <Box ref={experienceRef} w="100%" pt={{ base: 2, md: 4 }}>
          <Reveal index={2}>
            <Experience isDarkMode={isDark} />
          </Reveal>
        </Box>

        <Box w="100%" pt={{ base: 2, md: 4 }}>
          <Reveal index={2}>
            <Projects isDarkMode={isDark} />
          </Reveal>
        </Box>
      </Stack>
    </Layout>
  );
};

export default Home;