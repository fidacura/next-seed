// src/components/Footer.tsx

import styles from "./Footer.module.scss";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div>© {currentYear}, next-seed</div>
			<div className={styles.footerRight}>
				{/* <a href="https://github.com/fidacura/next-seed">GitHub</a> */}
				{/* <a href="mailto:hello@example.com">Contact</a> */}
			</div>
		</footer>
	);
}
