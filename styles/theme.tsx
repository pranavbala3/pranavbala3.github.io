import { theme as chakraTheme, extendTheme } from "@chakra-ui/react";

const fluidType = (minFont: number, maxFont: number) => {
	const XX = 768 / 100;
	const YY = (100 * (maxFont - minFont)) / (1920 - 768);
	const ZZ = minFont / 16;
	return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const colors = {
  background: "#12141D",
  secondary: "#080808",
  complement: "#FA934F",
  displayColor: "#FFFFFF",
  textPrimary: "#D1D5DB",
  textSecondary: "#8F9094",
  button1: "#805AD5",
  button2: "#F6A20E",
  button3: "#5132BF",
  borderColor: "#111111",
  brand: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659",
    1000: "#261c47",
  },
};

const Link = {
	baseStyle: {
		color: colors.brand["500"],
		_hover: { color: colors.brand["400"], textDecoration: "none" },
	},
};

const overrides = {
	...chakraTheme,
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