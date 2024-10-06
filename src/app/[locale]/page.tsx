import HomepageHero from "@/components/homepage/homepage-hero/homepage-hero";
import HomepageAbout from "@/components/homepage/homepage-about/homepage-about";

import styles from "./page.module.scss";
import HomepageForm from "@/components/homepage/homepage-form/homepage-from";

export default function Home() {
	return (
		<>
			<HomepageHero />
			<div className={styles.divider} />
			<HomepageAbout />
			<HomepageForm />
			<div className={styles.divider} />
		</>
	);
}
