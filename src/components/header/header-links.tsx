import { House, LucideIcon, Store, User } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

type TNavLink = {
	name: string;
	path: string;
	icon: LucideIcon;
	disabled?: boolean;
};

export default function HeaderLinks() {
	const t = useTranslations("");

	const navLinks: TNavLink[] = [
		{
			name: t("navLikns.home"),
			path: "/home",
			icon: House,
			disabled: false,
		},
		{
			name: t("navLikns.store"),
			path: "/store",
			icon: Store,
			disabled: false,
		},
	];

	return (
		<>
			{navLinks.map((link: TNavLink) => (
				<li key={link.path}>
					<Link href={link.disabled ? "#" : link.path}>
						<span>{link.icon && <link.icon />}</span>
						{link.name}
					</Link>
				</li>
			))}
		</>
	);
}
