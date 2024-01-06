import { useEffect, useRef, useState } from "react";
import { Button, Icon, Stack, Heading, Flex, } from "@chakra-ui/react";
import { ArrowDownIcon } from '@chakra-ui/icons'
import { NextPage } from "next";
import {motion} from "framer-motion";
import Reveal from "../styles/Reveal";
import Layout from "../components/Layout";
import Typewriter from 'typewriter-effect/dist/core';
import About from "../components/about";
import Education from "../components/education";
import { FaGraduationCap } from "react-icons/fa";

const Home: NextPage = () => {
  const titleRef = useRef(null);
  const theRef = useRef(null);
  const [isBouncing, setIsBouncing] = useState(true);

  const scrollDown = () => {
    theRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
 }

  const handleButtonClick = () => {
    if(isBouncing) {
       setIsBouncing(false);
    }

    scrollDown(); 
  };

  const bounceTransition = {
    type: 'spring', 
    stiffness: 21, 
    mass: 2, 
    damping: 0,
  }

  useEffect(() => {

    const titleElement = titleRef.current;
    const typewriter = new Typewriter(titleElement, {
      strings: ["Developer", "Innovator", "Problem Solver"],
      autoStart: true,
      loop: true,
    });

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <Layout>
      <motion.div>
      <Stack spacing={10} justifyContent="flex-start" alignItems="center" width="100%">
        <Flex height="60vh" alignItems="center" justifyContent="center">
          <Flex direction="column" background ="gray.100" p={12} rounded={6}>
              <Heading mt={0} fontSize="8xl" lineHeight="95%" letterSpacing={{ sm: "-1.2px", md: "-1.8px" }} position="relative" zIndex={1} >
              Hi, I'm Pranav Balabhadra <br /> <span ref={titleRef} />
              </Heading>
          </Flex>
        </Flex>
      </Stack>
      <Heading textAlign='center' as='h1' fontSize='display' color="white"> Welcome To My Portfolio! </Heading>
      <Flex alignItems="center" justifyContent="center" p={5}>
        <motion.div 
                    initial={{y: 0}}
                    animate={{
                      y: [7, -7], 
                    }}               
                    transition= {isBouncing ? bounceTransition : {} }
                    style={{marginTop: '7vh', marginLeft: '-5px'}}
                >
        <ArrowDownIcon id='arrow' textAlign='center' boxSize={10} color='white' onClick={handleButtonClick}/>
        </motion.div>
      </Flex>
      </motion.div>
      <Flex pt={20} pb={10}>
        <motion.div ref={theRef}>
          <Reveal index={2}>
            <About />
          </Reveal>
        </motion.div>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Button
          leftIcon={<Icon as={FaGraduationCap} />}
          colorScheme="brand"
          variant="outline"
        >
          Learn more about my journey
        </Button>
      </Flex>
      <Education />
    </Layout>
  );
};

export default Home;