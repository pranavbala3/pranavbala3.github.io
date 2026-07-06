import React from "react";
import {
  Link,
  Text,
  Heading,
  Box,
  VStack,
  HStack,
  Badge,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const experiences = [
  {
    title: "Software Engineer",
    company: "Amazon",
    period: "Jun 2025 - Present",
    description:
      "Built and maintained Forge, an AI-powered developer tooling platform used across Prime Video engineering teams, leveraging MCP for code search, documentation retrieval, and codebase understanding. Reduced Neptune analytics costs by 93% and cut graph construction time by 90% through a shared-graph architecture and incremental indexing system.",
  },
  {
    title: "Software Engineering Intern",
    company: "Iron Mountain",
    period: "Jun 2024 - Aug 2024",
    description:
      "Implemented a Kubernetes-based CI/CD deployment pipeline for an observability stack using ArgoCD, Kustomize, Grafana, Prometheus, and Loki, reducing deployment time by 80% and setup effort by 70%.",
  },
  {
    title: "AI Python Developer",
    company: "Expedient",
    period: "Dec 2023 - May 2025",
    description:
      "Developed and maintained Expedient’s AI CTRL services using React, TypeScript, and Python, added multi-format document support with LangChain, and implemented a feedback loop for model improvement using Elasticsearch.",
  },
  {
    title: "Software Engineering Intern",
    company: "Informetric Systems",
    period: "Jun 2023 - Aug 2023",
    description:
      "Built a high-performance C++ and OpenGL visualization tool to improve RQMS graphing capability and deployed AWS infrastructure for AgileDoc proof-of-concept testing.",
    link: "https://www.informetric.com/agiledo/",
    linkText: "AgileDoc",
  },
  {
    title: "Machine Learning Researcher",
    company: "Shoffstall Lab",
    period: "Jan 2022 - May 2024",
    description:
      "Developed a segmentation pipeline for CT imaging using PyTorch and Meta’s Segment Anything Model, achieving 92% testing accuracy in fascicle movement tracking for the vagus nerve.",
  },
];

const Experience = ({ isDarkMode = true }: { isDarkMode?: boolean }) => (
  <Box id="experience" px={{ base: 6, md: 12, lg: 20 }} py={{ base: 16, md: 24 }} maxW="1400px" mx="auto">
    <VStack alignItems="flex-start" spacing={8}>
      <Box>
        <Badge colorScheme="cyan" variant="subtle" px={3} py={1} rounded="full">Experience</Badge>
        <Heading color={isDarkMode ? "white" : "gray.800"} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} mt={4}>
          A track record of building, learning, and shipping.
        </Heading>
      </Box>

      <VStack spacing={5} alignItems="stretch" w="100%">
        {experiences.map((job) => (
          <Box
            key={job.title}
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
                  {job.title} @ {job.company}
                </Heading>
              </Box>
              <Badge colorScheme="purple" variant="subtle" px={3} py={1} rounded="full">
                {job.period}
              </Badge>
            </HStack>

            <List spacing={3} mt={4} color={isDarkMode ? "gray.300" : "gray.700"} fontSize={{ base: "xl", md: "md" }}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="cyan.300" />
                <Box as="span" display="inline" overflowWrap="anywhere">
                  {job.description}
                </Box>
                {job.link ? (
                  <>
                    {" "}
                    <Link href={job.link} isExternal color="cyan.300">
                      {job.linkText}
                    </Link>
                  </>
                ) : null}
              </ListItem>
            </List>
          </Box>
        ))}
      </VStack>
    </VStack>
  </Box>
);

export default Experience;