import { useEffect, useRef, useState } from "react";
import { Box, Heading, Text, VStack, HStack, Link, Flex, Spacer, Button, Card, CardHeader, CardBody } from "@chakra-ui/react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import Typewriter from 'typewriter-effect/dist/core';
import styles from './styles.module.css'; // Import CSS module for styles

const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1.",
    link: "#",
  },
  {
    title: "Project 2",
    description: "Description of Project 2.",
    link: "#",
  },
  // Add more projects as needed
];

// Personal Information
const personalInfo = {
  email: "your.email@example.com",
  linkedin: "linkedin.com/in/yourprofile",
  // Add more information as needed
};

// Skills
const skills = [
  "Skill 1",
  "Skill 2",
  // Add more skills as needed
];

// Experience
const experience = [
  {
    position: "Position 1",
    company: "Company 1",
    duration: "Duration 1",
    description: "Description 1",
  },
  {
    position: "Position 2",
    company: "Company 2",
    duration: "Duration 2",
    description: "Description 2",
  },
  // Add more experiences as needed
];

// Education
const education = [
  {
    degree: "Degree 1",
    institution: "Institution 1",
    duration: "Duration 1",
  },
  {
    degree: "Degree 2",
    institution: "Institution 2",
    duration: "Duration 2",
  },
  // Add more educations as needed
];

const Home: NextPage = () => {
  const titleRef = useRef(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const titleElement = titleRef.current;
    const typewriter = new Typewriter(titleElement, {
      strings: ["Hi, I'm Pranav Balabhadra"],
      autoStart: true,
      loop: false,
      onComplete: (self) => {
        setShowText(true);
      },
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box p={8}>
        {/* Styled Title Section with Typewriter Effect */}
        <Box mb={8}>
          <Heading as="h1" mb={2} fontSize="4xl" fontWeight="bold" color="teal.500">
            <span ref={titleRef} />
          </Heading>
          <Text fontSize="lg">
            Showcase of my projects and passion for software development.
          </Text>
        </Box>

        {/* Projects Section */}
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Projects
          </Heading>
          <HStack align="start" spacing={4}>
            {projects.map((project, index) => (
              <Card key={index} maxW="md" mr="20px" mt="30px">
                <CardHeader>
                  <Heading as="h3" size="md">
                    {project.title}
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Text pb="15px">{project.description}</Text>
                </CardBody>
                <Flex gap="45px">
                  <Button border="1px solid" color="#007BFF" bg="#FFF" ml="20px" mb="10px">
                    <Link href={project.link} color="blue.500" isExternal>
                      View Project
                    </Link>
                  </Button>
                </Flex>
              </Card>
            ))}
          </HStack>
        </Box>

        {/* About Me Section */}
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            About Me
          </Heading>
          <Text>
            Hi, I'm Pranav Balabhadra, a computer science student passionate about
            software development. I love building innovative projects and
            exploring new technologies.
          </Text>
        </Box>

        {/* Skills Section */}
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Skills
          </Heading>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Box>

        {/* Experience Section */}
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Experience
          </Heading>
          {experience.map((exp, index) => (
            <Box key={index} className={styles.experience}>
              <Heading as="h3" size="md">
                {exp.position} at {exp.company}
              </Heading>
              <Text>{exp.duration}</Text>
              <Text>{exp.description}</Text>
            </Box>
          ))}
        </Box>

        {/* Education Section */}
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Education
          </Heading>
          {education.map((edu, index) => (
            <Box key={index} className={styles.education}>
              <Heading as="h3" size="md">
                {edu.degree} from {edu.institution}
              </Heading>
              <Text>{edu.duration}</Text>
            </Box>
          ))}
        </Box>

        {/* Contact Me Section */}
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Contact Me
          </Heading>
          <HStack spacing={4}>
            <Text>
              <strong>Email:</strong> {personalInfo.email}
            </Text>
            <Text>
              <strong>LinkedIn:</strong>{" "}
              <Link href={personalInfo.linkedin} color="blue.500" isExternal>
                {personalInfo.linkedin}
              </Link>
            </Text>
            {/* Add more contact information as needed */}
          </HStack>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;