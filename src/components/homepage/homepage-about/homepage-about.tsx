import { useTranslations } from "next-intl";
import styles from "./homepageabout.module.scss";
import { Globe, LucideIcon, Shield, Users, Zap } from "lucide-react";

type THomepageAbout = {
	title: string;
	text: string;
	ourValues: {
		icon: LucideIcon;
		title: string;
		text: string;
	}[];
};

export default function HomepageAbout() {
	const t = useTranslations("homeAbout");
	const homepageAboutContent: THomepageAbout = {
		title: t("title"),
		text: t("text"),
        ourValues: [
            {
                icon: Zap,
                title: t("ourValues.0.title"), 
                text: t("ourValues.0.text"),   
            },
            {
                icon: Shield,
                title: t("ourValues.1.title"), 
                text: t("ourValues.1.text"),  
            },
            {
                icon: Globe,
                title: t("ourValues.2.title"), 
                text: t("ourValues.2.text"),   
            },
            {
                icon: Users,
                title: t("ourValues.3.title"), 
                text: t("ourValues.3.text"),   
            },
        ],
	};
	return (
		<div>
			<div className={styles.aboutSection}>
				<h2>{homepageAboutContent.title}</h2>
				<p>{homepageAboutContent.text}</p>
			</div>
			<div className={styles.ourValues}>
				{homepageAboutContent.ourValues.map((item, index) => {
					return (
						<div key={index} className={styles.ourValuesItem}>
							<div className={styles.icon}>{item.icon && <item.icon />}</div>
							<h4>{item.title}</h4>
							<p>{item.text}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
