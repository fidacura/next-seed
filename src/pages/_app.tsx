// src/pages/_app.tsx

import { AppProps } from "next/app";
import "../styles/global.scss";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Nav />
			<main>
				<Component {...pageProps} />
			</main>
			<Footer />
		</>
	);
}
