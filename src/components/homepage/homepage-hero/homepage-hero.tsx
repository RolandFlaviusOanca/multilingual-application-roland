import { useTranslations } from "next-intl";
import styles from "./homepagehero.module.scss";
import Image from "next/image";
import Button from "../../ui/button/button";

type THomepageHero = {
	title: string;
	text: string;
	cta: string;
	img: string;
};

export default function HomepageHero() {
	const t = useTranslations("homeHero");
	const homepageHeroContent: THomepageHero = {
		title: t("title"),
		text: t("text"),
		cta: t("cta"),
		img: "/hero-image.png",

	};

	return (
		<div className={styles.heroWrapper}>
			<div className={styles.col}>
				<div className={styles.divider} />
				<h1>{homepageHeroContent.title}</h1>
				<p>{homepageHeroContent.text}</p>
				<div className={styles.divider} />
                <Button label={homepageHeroContent.cta} />
			</div>
			<div className={styles.col}>
				<div className={styles.imgWrapper}>
					<Image
						width={350}
						height={350}
						src={homepageHeroContent.img}
						alt="hero-image"
					/>
				</div>
			</div>
		</div>
	);
}
