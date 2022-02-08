// i18n
import { useTranslation } from 'next-i18next';

// Chakra UI
import {
  Box,
  Container,
  Stack,
	Heading,
  Text,
  Link,
  useColorModeValue,
	ButtonGroup, 
	IconButton,
} from '@chakra-ui/react';
 
// Icons
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
  
export default function Footer() {
	const iconFontSize = "40px";
	const { t } = useTranslation('common');

  return (
		<Box
			color={useColorModeValue('gray.700', 'gray.200')}>
			<Heading>
				<Text 
				as={'span'}
				position={'relative'}
				_after={{
					content: "''",
					width: 'full',
					height: { base: '10%', md: '30%' },
					position: 'absolute',
					bottom: -1,
					left: 0,
					bg: 'teal.400',
					zIndex: -1,}}>{t('contact-heading')}</Text>
				</Heading>
			<Container
				as={Stack}
				maxW={'6xl'}
				py={10}
				direction={{ base: 'column', md: 'row' }}
				spacing={4}
				justify={{ base: 'center', md: 'space-between' }}
				align={{ base: 'center', md: 'center' }}>
				<Stack direction={'column'}>
					<Text 
						display="block"
						fontSize={'1.3em'}
						fontWeight={'700'}
						color={useColorModeValue('blackAlpha.500', 'yellow.500')}
					>
						{t('contact-me')}
					</Text>
					<Link href="mailto:samsonshamdev@gmail.com">
						samsonshamdev@gmail.com
					</Link>
				</Stack>
				<Stack direction={'row'} spacing={6}>
					<ButtonGroup variant="ghost" color="gray.600" m={6} display={'inline-flex'} >
						<IconButton _hover={{ color: useColorModeValue('blackAlpha.600', 'whiteAlpha.600') }} mx={4} as="a" href="https://www.linkedin.com/in/samson-sham" aria-label="LinkedIn" icon={<FaLinkedin fontSize={iconFontSize} />} />
						<IconButton _hover={{ color: useColorModeValue('blackAlpha.600', 'whiteAlpha.600') }} mx={4} as="a" href="https://github.com/samsonsham" aria-label="GitHub" icon={<FaGithub fontSize={iconFontSize} />} />
						<IconButton _hover={{ color: useColorModeValue('blackAlpha.600', 'whiteAlpha.600') }} mx={4} as="a" href="https://twitter.com/samson_sham" aria-label="Twitter" icon={<FaTwitter fontSize={iconFontSize} />} />
					</ButtonGroup>
				</Stack>
			</Container>
		</Box>
  );
}