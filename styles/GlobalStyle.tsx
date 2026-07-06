import { Global, css } from "@emotion/react";
import { useColorMode } from "@chakra-ui/react";
import React from "react";

type GlobalStyleProps = {
	children: JSX.Element | JSX.Element[];
};

const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
	const { colorMode } = useColorMode();
	const isDark = colorMode === "dark";

	return (
		<>
			<Global
				styles={css`
					::selection {
						background-color: #7c3aed;
						color: #f8fafc;
					}
					::-moz-selection {
						background: #7c3aed;
						color: #f8fafc;
					}
					html {
						min-width: 356px;
						min-height: 100vh;
						scroll-behavior: smooth;
					}
					body {
						margin: 0;
						background: ${isDark ? "radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 22%), radial-gradient(circle at bottom right, rgba(124, 58, 237, 0.18), transparent 24%), linear-gradient(135deg, rgba(255,255,255,0.025), rgba(255,255,255,0.0)), #050816" : "radial-gradient(circle at top left, rgba(124, 58, 237, 0.12), transparent 22%), radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.10), transparent 24%), linear-gradient(135deg, rgba(255,255,255,0.7), rgba(248,250,252,1)), #f8fafc"};
						background-image: ${isDark ? "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 22%), radial-gradient(circle at bottom right, rgba(124, 58, 237, 0.18), transparent 24%)" : "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px), radial-gradient(circle at top left, rgba(124, 58, 237, 0.12), transparent 22%), radial-gradient(circle at bottom right, rgba(34, 211, 238, 0.10), transparent 24%)"};
						background-size: ${isDark ? "24px 24px, auto, auto" : "24px 24px, 24px 24px, auto, auto"};
						background-attachment: fixed;
						color: ${isDark ? "#e2e8f0" : "#111827"};
						font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
						position: relative;
						overflow-x: hidden;
					}
					body::before {
						content: "";
						position: fixed;
						top: -20%;
						left: -10%;
						width: 140%;
						height: 140%;
						pointer-events: none;
						background: ${isDark ? "radial-gradient(circle, rgba(34,211,238,0.12), transparent 35%)" : "radial-gradient(circle, rgba(124,58,237,0.08), transparent 35%)"};
						filter: blur(50px);
						animation: drift 18s ease-in-out infinite alternate;
						z-index: 0;
					}
					body::after {
						content: "";
						position: fixed;
						top: 10%;
						right: -15%;
						width: 60vw;
						height: 60vw;
						max-width: 600px;
						max-height: 600px;
						pointer-events: none;
						background: ${isDark ? "radial-gradient(circle, rgba(124,58,237,0.16), transparent 60%)" : "radial-gradient(circle, rgba(34,211,238,0.11), transparent 60%)"};
						filter: blur(60px);
						animation: driftAlt 20s ease-in-out infinite alternate;
						z-index: 0;
					}
					@keyframes drift {
						0% { transform: translate(0, 0) scale(1); }
						100% { transform: translate(6%, 8%) scale(1.08); }
					}
					@keyframes driftAlt {
						0% { transform: translate(0, 0) scale(1); }
						100% { transform: translate(-6%, -5%) scale(1.05); }
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
						background: transparent;
					}
				`}
			/>
			{children}
		</>
	);
};

export default GlobalStyle;