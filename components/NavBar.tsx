import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = [
  { name: "About", path: "#about" },
  { name: "Experience", path: "#experience" },
  { name: "Projects", path: "#projects" },
];

const NavLink = ({ children, path, isDarkMode = true }: { children: ReactNode; path: string; isDarkMode?: boolean }) => (
  <Box
    as="a"
    href={path}
    px={3}
    py={2}
    rounded="full"
    fontSize={{ base: "lg", md: "sm" }}
    fontWeight="600"
    color={isDarkMode ? "gray.200" : "gray.700"}
    transition="all 0.2s ease"
    _hover={{
      textDecoration: "none",
      bg: isDarkMode ? "whiteAlpha.200" : "gray.100",
      color: isDarkMode ? "white" : "gray.900",
    }}
  >
    {children}
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isTransparent, setIsTransparent] = useState(true);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsTransparent(window.scrollY <= 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Box
        bg={isTransparent ? (isDark ? "rgba(5, 8, 22, 0.2)" : "rgba(255, 255, 255, 0.25)") : (isDark ? "rgba(5, 8, 22, 0.8)" : "rgba(255, 255, 255, 0.9)")}
        backdropFilter="blur(24px)"
        color={isDark ? "white" : "gray.800"}
        px={{ base: 4, md: 8 }}
        position="fixed"
        width="100%"
        zIndex="99"
        top="0"
        transition="all 0.3s"
        borderBottom={isTransparent ? "1px solid transparent" : (isDark ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(15, 23, 42, 0.08)")}
      >
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <HStack spacing={{ base: 2, sm: 3 }} alignItems="center">
            <Box as="a" href="https://github.com/pranavbala3" target="_blank" rel="noreferrer">
              <Avatar size="sm" src="https://i.ibb.co/Gddn6VB/headshot.jpg" _hover={{ transform: "scale(1.05)" }} transition="transform 0.2s" />
            </Box>
            <Box>
              <Text fontSize={{ base: "md", sm: "lg" }} fontWeight="700">Pranav Balabhadra</Text>
            </Box>
          </HStack>

          <HStack spacing={1} display={{ base: "flex", md: "none" }}>
            <IconButton
              aria-label="Toggle theme"
              size="md"
              variant="ghost"
              onClick={toggleColorMode}
              color={isDark ? "white" : "gray.700"}
              icon={isDark ? <SunIcon /> : <MoonIcon />}
              h={{ base: "48px", md: "40px" }}
              w={{ base: "48px", md: "40px" }}
              fontSize={{ base: "18px", md: "16px" }}
              _hover={{ bg: isDark ? "whiteAlpha.200" : "gray.100" }}
            />
            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={isOpen ? onClose : onOpen}
              variant="ghost"
              color={isDark ? "white" : "gray.700"}
              h={{ base: "48px", md: "40px" }}
              w={{ base: "48px", md: "40px" }}
              fontSize={{ base: "18px", md: "16px" }}
              _hover={{ bg: isDark ? "whiteAlpha.200" : "gray.100" }}
            />
          </HStack>

          <HStack as="nav" spacing={1} display={{ base: "none", md: "flex" }}>
            {Links.map(({ name, path }) => (
              <NavLink key={path} path={path} isDarkMode={isDark}>
                {name}
              </NavLink>
            ))}
            <IconButton
              aria-label="Toggle theme"
              size="sm"
              variant="ghost"
              onClick={toggleColorMode}
              color={isDark ? "white" : "gray.700"}
              icon={isDark ? <SunIcon /> : <MoonIcon />}
            />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={2} alignItems="flex-start">
              {Links.map(({ name, path }) => (
                <NavLink key={path} path={path} isDarkMode={isDark}>
                  {name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Box paddingTop="20px" />
    </>
  );
};
