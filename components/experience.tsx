import React from "react";
import {
    Link,
    Text,
    Heading,
    Box,
    VStack,
    HStack,
  } from "@chakra-ui/react";

  
  const Experience = () => (
    <>
        <VStack p={100} alignItems="left">
        <Heading color="white" fontSize="6xl" pb={3}> Experience </Heading>
            <HStack pb={10}>
                <Box
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                padding="30px"
                width="100%"
                >
                    <HStack justifyContent="space-between" alignItems="flex-start">
                        <Heading color="black" fontSize="3xl"> AI Python Developer @ Expedient </Heading>
                        <Text>Dec 2023 - Current</Text>
                    </HStack>
                    <Text fontSize={{ base: "14x", md: "16px" }} whiteSpace="pre-line">
                    I am currently serving as an AI Python Developer at Expedient on their AI Team. One of my achievements thus far includes implementing multi-modal 
                    functionality for our chatbot, which utilizes Chainlit. This feature allows users to seamlessly attach documents, enabling them to ask targeted 
                    questions related to the content they provide. The multi-modal functionality supports a variety of document formats, including PDFs, DOCX, XLSX, 
                    and CSV. This enhancement has significantly elevated the chatbot's capabilities, providing users with a more interactive and tailored experience. 
                    Stay tuned for more updates!
                    </Text>
                </Box>
            </HStack>
            <HStack pb={10}>
                <Box
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                padding="30px"
                width="100%"
                >
                    <HStack justifyContent="space-between" alignItems="flex-start">
                        <Heading color="black" fontSize="3xl"> Software Engineer Intern @ Informetric Systems </Heading>
                        <Text>June 2023 - August 2023</Text>
                    </HStack>
                    <Text fontSize={{ base: "14x", md: "16px"  }} whiteSpace="pre-line">
                        At Informetric Systems, I programmed in C++ for the first time. In my role, I developed a program using C++ that aimed to enhance data visualization 
                        capabilities by generating 3D surface plots through OpenGL. The objective was to replace {' '}
                        <Link colorScheme="brand" href="https://www.informetric.com/rqms/">
                        <strong>RQMS</strong>
                        </Link>
                        's existing graphing software with a more efficient solution, 
                        offering increased graphing capabilities and faster compilation speeds. Additionally, I configured and and delployed an Amazon 
                        Elastic Compute Cloud instance coupled with Amazon Relational Database Service. This initiative was part of a proof-of-concept for {' '}
                        <Link colorScheme="brand" href="https://www.informetric.com/agiledo/">
                        <strong>AgileDoc</strong>
                        </Link>
                        {' '} in a cloud environment. The deployment of AgileDoc's components on AWS infrastructure involved creating an SQL database and thorough testing of product 
                        functionality. This testing process included the validation of software components through the execution of SQL scripts and various test scenarios. 
                        These efforts collectively aimed to assess and ensure the seamless integration and performance of AgileDoc in a cloud-based setup.
                    </Text>
                </Box>
            </HStack>
            <HStack pb={10}>
                <Box
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                padding="30px"
                width="100%"
                >
                    <HStack justifyContent="space-between" alignItems="flex-start">
                        <Heading color="black" fontSize="3xl"> Engineering Intern @ AAYUNA </Heading>
                        <Text>June 2022 - August 2023</Text>
                    </HStack>
                    <Text fontSize={{ base: "14px", md: "16px" }} whiteSpace="pre-line">
                    In my role, I leveraged Python to apply image processing techniques to analyze images of integrated circuits. This effort resulted in an 80% 
                    accuracy rate in text recognition and precise measurements of features within 1% of expected dimensions. The implementation involved utilizing a range 
                    of Python libraries, including OpenCV, NumPy, Pandas, Scikit-Learn, Matplotlib, Pytesseract, and Imutils, to optimize the efficiency and accuracy of 
                    the image processing pipeline. Beyond my focus on software development, I contributed to product development by designing models and constructing 
                    a UV curing assembly using SolidWorks. In addition to my contributions in image processing and engineering design, I wrote Python code to control the 
                    XYZ position of a camera setup designed for viewing small objects.
                    </Text>
                </Box>
            </HStack>
            <HStack pb={10}>
                <Box
                bg="white"
                p={4}
                borderRadius="md"
                boxShadow="md"
                padding="30px"
                width="100%"
                >
                    <HStack justifyContent="space-between" alignItems="flex-start">
                        <Heading color="black" fontSize="3xl"> Machine Learning Researcher @ Shoffstall Lab </Heading>
                        <Text>Jan 2022 - Present</Text>
                    </HStack>
                    <Text fontSize={{ base: "14px", md: "16px" }} whiteSpace="pre-line">
                    I spearheaded the development of a robust machine learning model aimed at tracking fascicle movement within the vagus nerve from CT images. Leveraging Python, 
                    I integrated Meta's Segment Anything Model with PyTorch into our image processing pipeline, resulting in a  92% testing accuracy. Additionally, I 
                    applied manual segmentation techniques to curate a high-quality training dataset from a vast collection of micro-CT scans. This approach ensured the 
                    model's efficacy and precision. Our integration of Meta's model significantly enhanced segmentation accuracy, complementing the machine learning algorithm's performance.
                    </Text>
                </Box>
            </HStack>
        </VStack>
    </>
  );

  export default Experience;