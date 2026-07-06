import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

const fluidType = (minFont: number, maxFont: number) => {
	const XX = 768 / 100;
	const YY = (100 * (maxFont - minFont)) / (1920 - 768);
	const ZZ = minFont / 16;
	return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const colors = {
  background: "#050816",
  secondary: "#090d1f",
  complement: "#22d3ee",
  displayColor: "#F8FAFC",
  textPrimary: "#E2E8F0",
  textSecondary: "#94A3B8",
  button1: "#7C3AED",
  button2: "#38BDF8",
  button3: "#22C55E",
  borderColor: "#1E293B",
  brand: {
    50: "#F5F3FF",
    100: "#EDE9FE",
    200: "#DDD6FE",
    300: "#C4B5FD",
    400: "#A78BFA",
    500: "#7C3AED",
    600: "#6D28D9",
    700: "#5B21B6",
    800: "#4C1D95",
    900: "#312E81",
    1000: "#1E1B4B",
  },
};

const Link = {
	baseStyle: {
		color: colors.brand["400"],
		_hover: { color: colors.brand["300"], textDecoration: "none" },
	},
};

const overrides = {
	...chakraTheme,
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false,
	},
	components: {
		Link,
	},
	colors,
	fontSizes: {
		xs: fluidType(6, 12),
		sm: fluidType(7, 14),
		md: fluidType(8, 16),
		lg: fluidType(9, 18),
		xl: fluidType(10, 20),
		'2xl': fluidType(12, 24),
		'3xl': fluidType(14, 28),
		'4xl': fluidType(18, 36),
		'5xl': fluidType(20, 40),
		'6xl': fluidType(24, 48),
		'7xl': fluidType(32, 64),
		'8xl': fluidType(36, 72),
		display: fluidType(80, 100),
		display2: fluidType(26, 36),
		display3: fluidType(19, 24),
	},
};

const customTheme = extendTheme(overrides);

export default customTheme;