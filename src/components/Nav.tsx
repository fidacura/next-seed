// src/components/Nav.tsx

import Link from "next/link";
import { useState } from "react";
import styles from "./Nav.module.scss";

export default function Nav() {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
		document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
	};

	return (
		<nav className={styles.nav}>
			{/* <Link href="/" className={styles.logo}>
				next-seed
			</Link>
			<div className={styles.right}>
				<button className={styles.menuButton} onClick={toggleMenu}>
					{isMenuOpen ? "Close" : "Menu"}
				</button>
				<div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}>
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
				</div>
				<div className={styles.desktopLinks}>
					<Link href="/about" className="btn">
						About
					</Link>
				</div>
			</div> */}
		</nav>
	);
}
