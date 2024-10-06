import { Globe, Mail, MapPin, Phone, User } from "lucide-react";
import { UserInfoProps } from "@/lib/types";
import styles from "./usercard.module.scss";

export default function UserInfo({
	username,
	email,
	phone,
	address,
	website,
}: UserInfoProps) {
	return (
		<>
			<div className={styles.flex}>
				<div className={styles.flex_item}>
					<User />
					<p>{username}</p>
				</div>
				<div className={styles.flex_item}>
					<Mail />
					<p>{email}</p>
				</div>
				<div className={styles.flex_item}>
					<Phone />
					<p>{phone}</p>
				</div>
				<div className={styles.flex_item}>
					<MapPin />
					<p>{`${address.suite}, ${address.street}, ${address.city},`}</p>
				</div>
				<div className={styles.flex_item}>
					<Globe />
					<p>{website}</p>
				</div>
			</div>
		</>
	);
}
