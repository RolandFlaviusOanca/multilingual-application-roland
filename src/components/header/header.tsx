import LanguageSwitcher from "./language-switcher";
import styles from "./header.module.scss";
import HeaderLinks from "./header-links";

export default function Header() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo}>
				<p>Roland</p>
			</div>
			<ul className={styles.navLinks}>
				<HeaderLinks />
			</ul>
			<div className={styles.languageSwitcher}>
				<LanguageSwitcher />
			</div>
		</nav>
	);
}
