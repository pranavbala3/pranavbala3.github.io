import React from "react";
import {
  Link,
  Text,
  Heading,
  Box,
  VStack,
  HStack,
  Badge,
  Wrap,
  WrapItem,
  Stack,
  Icon,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "MSE-Break",
    period: "2025",
    description:
      "A soft-prompt-based method for steering harmful concept embeddings in large language models to expose vulnerabilities in alignment mechanisms and benchmark attack success rates against existing approaches.",
    repoLink: null,
    paperLinks: [
      { label: "AIW Workshop", href: "https://openreview.net/forum?id=h6W6ZFRwLj" },
      { label: "ICLR", href: "https://openreview.net/forum?id=si3mQHv7An" },
    ],
    tags: ["LLMs", "Interpretability", "PyTorch", "Research"],
  },
  {
    title: "Intelligent Document Processing Agent",
    period: "2024",
    description:
      "An AI-powered pipeline for processing research papers in PDF format, extracting images, figures, and tables, and answering complex queries through retrieval-augmented generation with ChromaDB and Gemini.",
    repoLink: "https://github.com/pranavbala3/Intelligent-Document-Processing-Agent",
    paperLinks: [],
    tags: ["RAG", "Gemini", "ChromaDB", "NLP"],
  },
  {
    title: "Furtographer",
    period: "2023",
    description:
      "A Flask-based web app for dog breed classification and personalized photo collections, built collaboratively using Python, SQLAlchemy, Docker, and HTML/CSS.",
    repoLink: "https://github.com/pranavbala3/Furtographer",
    paperLinks: [],
    tags: ["Flask", "Python", "Docker", "SQLAlchemy"],
  },
];

const Projects = ({ isDarkMode = true }: { isDarkMode?: boolean }) => (
  <Box id="projects" px={{ base: 6, md: 12, lg: 20 }} py={{ base: 16, md: 24 }} maxW="1400px" mx="auto">
    <VStack alignItems="flex-start" spacing={8}>
      <Box>
        <Badge colorScheme="purple" variant="subtle" px={3} py={1} rounded="full">Projects</Badge>
        <Heading color={isDarkMode ? "white" : "gray.800"} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mt={4}>
          Products and experiments that turn ideas into impact.
        </Heading>
      </Box>

      <VStack spacing={5} alignItems="stretch" w="100%">
        {projects.map((project) => (
          <Box
            key={project.title}
            bg={isDarkMode ? "rgba(15, 23, 42, 0.75)" : "rgba(255, 255, 255, 0.94)"}
            border="1px solid"
            borderColor={isDarkMode ? "whiteAlpha.200" : "gray.200"}
            p={{ base: 6, md: 8 }}
            rounded="2xl"
            boxShadow="0 18px 50px rgba(0,0,0,0.22)"
          >
            <HStack justifyContent="space-between" alignItems="flex-start" spacing={4} flexWrap="wrap">
              <Box>
                <Heading color={isDarkMode ? "white" : "gray.800"} fontSize={{ base: "xl", md: "2xl" }}>
                  {project.title}
                </Heading>
              </Box>
              <Badge colorScheme="cyan" variant="subtle" px={3} py={1} rounded="full">
                {project.period}
              </Badge>
            </HStack>

            <Text color={isDarkMode ? "gray.300" : "gray.700"} mt={4} lineHeight="1.8" overflowWrap="anywhere">
              {project.description}
            </Text>

            <Wrap mt={4} spacing={3}>
              {project.tags.map((tag) => (
                <WrapItem key={tag}>
                  <Badge colorScheme="blue" variant="solid" px={3} py={1.5} rounded="full">
                    {tag}
                  </Badge>
                </WrapItem>
              ))}
            </Wrap>

            <Stack direction={{ base: "column", sm: "row" }} spacing={3} mt={4} alignItems="center">
              {project.repoLink ? (
                <Link href={project.repoLink} isExternal color="cyan.400" display="inline-flex" _hover={{ color: "cyan.300" }}>
                  <Icon as={FaGithub} boxSize={6} />
                </Link>
              ) : null}
              {project.paperLinks.map((paperLink) => (
                <Link key={paperLink.label} href={paperLink.href} isExternal color="cyan.400" fontSize="sm" fontWeight="600" _hover={{ color: "cyan.300" }}>
                  {paperLink.label}
                </Link>
              ))}
            </Stack>
          </Box>
        ))}
      </VStack>
    </VStack>
  </Box>
);

export default Projects;