// Next
import { useRouter } from "next/router";

// i18n
import { useTranslation } from "next-i18next";

// Chakra
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  ButtonGroup,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

// Icons
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Work() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const iconFontSize = "30px";
  const iconColor = useColorModeValue("gray.600", "gray.600");
  const iconHoverColor = useColorModeValue("blackAlpha.600", "gray.400");

  return (
    <Box bg={""} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        position={"absolute"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color={"gray.500"}
                mb={5}
                fontWeight={800}
                fontSize={{ base: "4xl", md: "6xl" }}
              >
                {t("my-project")}
              </Heading>
              <Text as={"span"} fontSize={"xl"} color={"gray.400"}>
                <Text textDecoration={"line-through"}>
                  {t("my-project-intro-1")}
                </Text>
                {t("my-project-intro-2")}
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
              {stats.map((stat, i) => (
                <Box key={i} bg={"gray.100"} rounded="xl" p={4}>
                  <Text
                    fontFamily={"Times New Roman"}
                    fontWeight={900}
                    fontSize={"3xl"}
                    color={"gray.600"}
                    mb={3}
                  >
                    {router.locale === "en" ? stat.title_en : stat.title_tc}
                  </Text>
                  <Image
                    borderRadius="10px"
                    boxSize="110px"
                    float="right"
                    ml={2}
                    objectFit="cover"
                    src={stat.imgSrc}
                    alt={router.locale === "en" ? stat.title_en : stat.title_tc}
                  />
                  <Text fontSize={"md"} color={"gray.700"} textAlign="left">
                    {router.locale === "en"
                      ? stat.description_en
                      : stat.description_tc}
                  </Text>

                  <Stack direction={"row"} my={4}>
                    <ButtonGroup variant="ghost" m={0} display={"inline-flex"}>
                      <IconButton
                        color={iconColor}
                        _hover={{ color: iconHoverColor }}
                        mx={0}
                        as="a"
                        href={stat.githubLink}
                        aria-label="GitHub"
                        icon={<FaGithub fontSize={iconFontSize} />}
                      />
                      <IconButton
                        color={iconColor}
                        _hover={{ color: iconHoverColor }}
                        mx={0}
                        as="a"
                        href={stat.siteLink}
                        aria-label="Twitter"
                        icon={<FaExternalLinkAlt fontSize={iconFontSize} />}
                      />
                    </ButtonGroup>
                  </Stack>
                  <Stack direction={"row"} my={2} bottom={0} position="static">
                    {stat.builtWith.map((tech, i) => (
                      <Text
                        key={i}
                        bg={"gray.500"}
                        color={"white"}
                        fontSize={"sm"}
                        px={1}
                        py={0}
                        borderRadius={5}
                      >
                        {tech}
                      </Text>
                    ))}
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const stats = [
  {
    title_en: "Noughts and Crosses",
    title_tc: "\u904e\u4e09\u95dc",
    imgSrc:
      "https://ik.imagekit.io/c5xc1x6srka/screenshot/screen_s_PYdH0GD1o?ik-sdk-version=javascript-1.4.3&updatedAt=1644969260245",
    description_en:
      "A.k.a. Tic-tac-toe. An epic mini game and would be a very first project for lots of developers. I am one of them as well.",
    description_tc:
      "\u4e00\u500b\u7d93\u5178\u5c0f\u904a\u6232\uff0c\u5f88\u591a\u7a0b\u5f0f\u958b\u54e1\u90fd\u6703\u62ff\u5b83\u4f86\u5c0f\u8a66\u725b\u5200\u3002",
    githubLink: "https://github.com/samsonsham/noughts-and-crosses",
    siteLink: "https://samsonsham.github.io/noughts-and-crosses/",
    builtWith: ["React", "Typescript", "SASS"],
  },
  {
    title_en: "Uvicode",
    title_tc: "Unicode \u8f49\u63db",
    imgSrc:
      "https://ik.imagekit.io/c5xc1x6srka/screenshot/Screenshot_2022-02-23_at_2.22.04_am_mrU1heK-8ro.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645582983562",
    description_en:
      "A Unicode Converter to facilitate i18n development, featuring emoji\ud83d\ude04 conversion and conversion on the fly.",
    description_tc:
      "\u4e00\u500b\u70ba\u65b9\u4fbf i18n \u958b\u767c\u800c\u88fd\u4f5c\u7684\u7a0b\u5f0f\uff0c\u652f\u63f4 emoji \ud83d\ude04 \u8f49\u63db\u53ca\u5be6\u6642\u8f49\u63db\u529f\u80fd\u3002",
    githubLink: "https://github.com/samsonsham/uvicode",
    siteLink: "https://uvicode.vercel.app",
    builtWith: ["Next.js", "Typescript", "Chakra UI", "i18next"],
  },
];
