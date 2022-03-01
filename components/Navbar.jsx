// React
import { useState } from "react";

// Next
import { useRouter } from "next/router";
import NextLink from "next/link";

// i18n
import { useTranslation } from "next-i18next";

// Chakra UI
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Icon,
  Text,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

// Icons and Fonts
import { HiCode } from "react-icons/hi";
import { MdTranslate } from "react-icons/md";

// Helper
import { decapitalize } from "../lib/util";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode("light");
  const { t } = useTranslation("common");
  const [size, setSize] = useState("md");
  const links = ["About", "Work", "Contact"];
  const router = useRouter();

  const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#" + decapitalize(children)}
      onClick={onClose}
    >
      {t(decapitalize(children))}
    </Link>
  );

  return (
    <Box>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={8} alignItems={"center"}>
          <Box
            fontFamily={
              router.locale === "en" ? "Kaushan Script" : "Noto Sans HK"
            }
            color={useColorModeValue("gray.600", "teal.50")}
            fontSize={{ base: "2xl", md: "4xl", lg: "4xl" }}
          >
            <Stack direction={"row"}>
              <NextLink href="/" passHref>
                <Link>
                  <Icon
                    as={HiCode}
                    aria-label="Back to Home page"
                    color={"orange.300"}
                    _hover={{ color: "orange.400" }}
                    w={8}
                    h={8}
                    mt={"1"}
                  />
                </Link>
              </NextLink>
              <Text
                bg={
                  colorMode === "light"
                    ? "linear-gradient(180deg, #FFFFFF 40%, #B2F5EA 65%, #FFFFFF 10%)"
                    : "linear-gradient(180deg, #1A202C 30%, #285E61 65%, #1A202C 10%)"
                }
              >
                {t("samson-sham")}
              </Text>
            </Stack>
          </Box>
        </HStack>
        <Flex alignItems={"center"}>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
            mr={{ base: 0, md: 4 }}
          >
            {links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          <NextLink href="/" locale={router.locale === "en" ? "tc" : "en"}>
            <IconButton
              icon={<MdTranslate />}
              aria-label="Change Language"
              visibility={isOpen ? "hidden" : "visible"}
            />
          </NextLink>
          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            aria-label={colorMode === "light" ? "Dark Mode" : "Light Mode"}
            visibility={isOpen ? "hidden" : "visible"}
            ml={{ base: 2, md: 4 }}
            onClick={toggleColorMode}
          />
          <IconButton
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            display={{ md: "none" }}
            ml={2}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>
      {/* Open Navigation Menu in Modal */}
      <Modal
        isOpen={isOpen}
        size={size}
        onClose={onClose}
        returnFocusOnClose={false}
      >
        <ModalOverlay
          bg={useColorModeValue("rgba(255,255,255,1)", "rgba(26,32,44,1)")}
          mt={16}
        />
        <ModalContent
          bg={useColorModeValue("rgba(255,255,255,1)", "rgba(26,32,44,1)")}
          boxShadow="0px"
        >
          <ModalHeader>{t("menu")}</ModalHeader>
          <ModalBody>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Navbar;
