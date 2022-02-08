// Next
import { useRouter } from 'next/router';

// i18n
import { useTranslation } from 'next-i18next';

// Next
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';

export default function Work() {
  const { t } = useTranslation('common');
	const router = useRouter();
	const getStats = () =>{
		return router.locale === 'en' ? stats_en : stats_tc
	}
  return (
    <Box bg={''} position={'relative'}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: 'none', lg: 'flex' }}
        position={'absolute'}
        insetY={0}
        right={0}>
        <Flex
          bgGradient={'linear(to-r, gray.800 10%, transparent)'}
          w={'full'}
          h={'full'}
        />
      </Flex>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'column', lg: 'row' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 4, md: 20, xl: 60 }}>
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color={'gray.500'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}>
                {t('my-project')}
              </Heading>
              <Text as={'span'} fontSize={'xl'} color={'gray.400'}>
                <Text textDecoration={'line-through'}>{t('my-project-intro-1')}</Text>
                {t('my-project-intro-2')}
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {getStats().map((stat) => (
                <Box 
                    key={stat.title}
                    bg={'gray.100'}
                    rounded="xl"
                    p={4}
                >
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={''}
                    mb={3}>
                    {stat.title}
                  </Text>
                  <Text fontSize={'xl'} color={'gray.500'}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={''}>
    {children}
  </Text>
);

const stats_en = [
  {
    title: 'Sample Project 1',
    content: (
      <>
        <StatsText>Sample Text</StatsText> Coming Soon
      </>
    ),
  },
  {
    title: 'Sample Project 2',
    content: (
      <>
        <StatsText>Sample Text</StatsText> Coming Soon
      </>
    ),
  },
  {
    title: 'Sample Project 3',
    content: (
      <>
        <StatsText>Sample Text</StatsText> Coming Soon
      </>
    ),
  },
  {
    title: 'Sample Project 4',
    content: (
      <>
        <StatsText>Sample Text</StatsText> Coming Soon
      </>
    ),
  },
];

const stats_tc = [
  {
    title: '\u7bc4\u4f8b\u4f5c\u54c1 1',
    content: (
      <>
        <StatsText>&#x7BC4;&#x4F8B;&#x6587;&#x5B57;</StatsText> &#x656C;&#x8ACB;&#x671F;&#x5F85;
      </>
    ),
  },
  {
    title: '\u7bc4\u4f8b\u4f5c\u54c1 2',
    content: (
      <>
        <StatsText>&#x7BC4;&#x4F8B;&#x6587;&#x5B57;</StatsText> &#x656C;&#x8ACB;&#x671F;&#x5F85;
      </>
    ),
  },
  {
    title: '\u7bc4\u4f8b\u4f5c\u54c1 3',
    content: (
      <>
        <StatsText>&#x7BC4;&#x4F8B;&#x6587;&#x5B57;</StatsText> &#x656C;&#x8ACB;&#x671F;&#x5F85;
      </>
    ),
  },
  {
    title: '\u7bc4\u4f8b\u4f5c\u54c1 4',
    content: (
      <>
        <StatsText>&#x7BC4;&#x4F8B;&#x6587;&#x5B57;</StatsText> &#x656C;&#x8ACB;&#x671F;&#x5F85;
      </>
    ),
  },
];