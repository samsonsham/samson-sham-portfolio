import { extendTheme } from '@chakra-ui/react'

const config = {
	initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  components: {
    Heading: {
      baseStyle: ({ colorMode }) => ({
				color: colorMode === 'dark' ? 'white' : 'gray.700',
			}),
    },
  },
})

export default theme