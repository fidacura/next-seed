// src/pages/about/index.tsx

import Head from "next/head";
import styles from "./About.module.scss";

export default function About() {
	return (
		<>
			<Head>
				<title>About | next-seed</title>
				<meta name="description" content="About next-seed starter template" />
			</Head>

			<div className={styles.container}>
				<h1>About</h1>
				<div className={styles.content}>
					<p>next-seed is a minimalist Next.js starter template with TypeScript, SCSS modules, and sensible defaults for modern web development.</p>
					<p>Built with simplicity and performance in mind to help you start your next project quickly and efficiently.</p>
					<p>
						<a href="https://github.com/fidacura/next-seed">GitHub Repository</a>
					</p>
				</div>
			</div>
		</>
	);
}
