
import styles from "./page.module.scss";

import HomepageAbout from "@/components/homepage/homepage-about/homepage-about";
import HomepageHero from "@/components/homepage/homepage-hero/Homepage-hero";

export default function Home() {
	return (
		<>
			<HomepageHero />
      <div className={styles.divider}/>
			<HomepageAbout />
      <div className={styles.divider}/>

		</>
	);
}
