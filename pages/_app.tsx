import { ChakraProvider, theme } from '@chakra-ui/react'
import AnimatedCursor from "react-animated-cursor"
import customTheme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
			<GlobalStyle>
        <AnimatedCursor 
              innerSize={15}
              outerSize={15}
              trailingSpeed={3.5}
              color='51, 153, 255'
              outerScale={2.1}
        />
				<Component {...pageProps} />
			</GlobalStyle>
    </ChakraProvider>
  )
}

export default MyApp