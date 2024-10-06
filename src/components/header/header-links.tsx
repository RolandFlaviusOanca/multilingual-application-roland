"use client";
import { TNavLink } from "@/lib/types";
import { House, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLinks() {
	const t = useTranslations("");
	const pathname = usePathname();
	const currentLocale = pathname.includes("/ro") ? "ro" : "en";
	const navLinks: TNavLink[] = [
		{
			name: t("navLikns.home"),
			path: `/${currentLocale}`,
			icon: House,
			disabled: false,
		},
		{
			name: t("navLikns.team"),
			path: `/${currentLocale}/team`,
			icon: Users,
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
