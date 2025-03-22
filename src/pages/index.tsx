// src/pages/index.tsx

import Head from "next/head";
import styles from "./Home.module.scss";

export default function Home() {
	return (
		<>
			<Head>
				<title>next-seed</title>
				<meta name="description" content="A minimal Next.js starter template" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.container}>
				<h5 className={styles.title}>Welcome to next-seed</h5>
				<p className={styles.description}>A minimalist Next.js starter for modern web projects</p>

				<div className={styles.grid}>
					<a href="https://github.com/fidacura/next-seed" className={styles.card}>
						<h5>GitHub &rarr;</h5>
						<p>View the source code and contribute to the project.</p>
					</a>
				</div>
			</div>
		</>
	);
}
