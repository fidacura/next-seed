// src/pages/404.tsx

import Link from "next/link";
import styles from "./Home.module.scss";

export default function NotFound() {
	return (
		<div className={styles.notFound}>
			<h1>404</h1>
			<p>Page not found</p>
			<Link href="/">Return to home</Link>
		</div>
	);
}
