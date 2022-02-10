// Next
import Head from 'next/head';
import dynamic from "next/dynamic";

// Components
const Navbar = dynamic(() => import("../components/Navbar"));
const Hero = dynamic(() => import("../components/Hero"));
const Work = dynamic(() => import("../components/Work"));
const Footer = dynamic(() => import("../components/Footer"));


// i18n
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Chakra UI
import {
  Box,
  Container,
  Stack,
} from '@chakra-ui/react'

export default function Home() {
  const { t } = useTranslation('common')

  return (
    <Container maxW={'3xl'} px={4}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
      >
        <Head>
          <title>{t('samson-sham')}</title>
          <meta name="title" property="og:title" content="Samson Sham's Portfolio"></meta>   
          <meta name="description" property="og:description" content="Front End Developer Portfolio, built with Next.js and Chakra, based in Reading"></meta>
          <meta name="image" property="og:image" content="https://avatars.githubusercontent.com/u/4945010?v=4"></meta>
          <meta name="author" content="Samson Sham"></meta>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <Navbar />
        <div id="about">
          <Hero />
        </div>
        <div id="work">
          <Work />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </Stack>
    </Container>
  )
}

// Server Side Translation from "next-i18next":
// An async function that you need to include on your page-level components
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})
