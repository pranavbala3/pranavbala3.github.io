import { ChakraProvider, theme } from '@chakra-ui/react'
import customTheme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
			<GlobalStyle>
				<Component {...pageProps} />
			</GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp