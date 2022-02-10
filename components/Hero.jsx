// React
import { useEffect } from 'react';

// Next
import { useRouter } from 'next/router';

// i18n
import { useTranslation } from 'next-i18next';

// Chakra UI
import {
  Button,
  Flex,
  Heading,
  Box,
	Icon,
  Stack,
  Text,
} from '@chakra-ui/react';

// Icons
import { ViewIcon } from '@chakra-ui/icons'
import { BsGearWideConnected } from "react-icons/bs";

// Polyfill for smooth scroll on mobile device
import smoothscroll from 'smoothscroll-polyfill';

// Animations
import { SpinAnimation, SpinAnticlockwiseAnimation } from '../lib/util';

export default function Hero() {
	const { t } = useTranslation('common');
	const router = useRouter();

	const isEng = () => {
		return router.locale === 'en';
	}

	useEffect(()=>{
		smoothscroll.polyfill();
		const workEle = document.querySelector("#work");
		const viewMyWorkBtn = document.querySelector("#viewMyWorkBtn");
		viewMyWorkBtn.addEventListener("click", ()=>{ workEle.scrollIntoView({ block: 'end',  behavior: 'smooth' })})
	},[]);

  return (
		<Stack minH={'40vh'} direction={{ base: 'column', md: 'row' }}>
			<Flex p={2} flex={1} align={'center'} justify={'center'}>
				<Stack spacing={6} w={'full'} maxW={'lg'}>
					<Heading fontSize={{ base: '4xl', md: '4xl' }}>
						<Box>
							<Stack direction={'row'} align={'center'} justify={'center'}>
								<Text tansform={'rotate(15deg)'} fontSize={'6xl'} mt={'8'} mr={'8'} color={'teal.400'} mb={6}>Hello!</Text>
								<Stack direction={'column'}>
									<Text fontSize={'md'} transform={'rotate(-10deg)'} color={'yellow.500'} mb={'-3'} ml={'-6'}>Nei Hou</Text>
									<Text fontSize={'4xl'} transform={'rotate(-10deg)'} color={'orange.500'} mb={6}>&#x4F60;&#x597D;!</Text>
								</Stack>
							</Stack>
							{t('about-intro-1')}<br />{t('about-intro-2')}
						</Box>
						<br />{' '}
					</Heading>
					<Box fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
						<Text>{t('about-content-1')}</Text>
						{!isEng() && <Text>{t('about-content-2')}</Text>}
					</Box>
					<Stack direction={{ base: 'column', md: 'row' }} justifyContent={'center'} spacing={4}>
						<Button
							id="viewMyWorkBtn"
							rounded={'md'}
							bg={'green.400'}
							color={'white'}
							_hover={{
								bg: 'green.500',
							}}>
									<ViewIcon w={6} h={6} mr={3} color="white" />{t('view-my-work')}
						</Button>
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1} justifyContent={"center"} pt={6}>
				<Box 
					animation={SpinAnimation}
					transformOrigin={'center'}
					color={'yellow.600'}
					pos="absolute"
				>
					<Icon 
					 as={BsGearWideConnected}
					 aria-label="A bigger spinning gearwheel"
					 w={56} h={56}
					/>
				</Box>
				<Box 
					animation={SpinAnticlockwiseAnimation}
					transformOrigin={'center'}
					color={'yellow.400'}
					mt={56}
					ml={32}
					pos={{md:'absolute', lg: 'absolute' }}
				>
					<Icon
						as={BsGearWideConnected}
						aria-label="A smaller spinning gearwheel"
						w={40} h={40}
					/>
				</Box>
			</Flex>
		</Stack>		
  )
}