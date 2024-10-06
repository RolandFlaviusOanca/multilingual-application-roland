
import styles from "./userlist.module.scss";
import UserCard from "../user-card/use-card";
import { TUserPage } from "@/lib/types";

export default function UsersList({ data }: TUserPage) {
	const itemsPerRow = 4;
	const totalItems = data.length;
	const spacerCount = (itemsPerRow - (totalItems % itemsPerRow)) % itemsPerRow;

	return (

		<div className={styles.flexGrid}>
			{data.map((user) => (
				<div className={styles.gridItem}>
					<UserCard key={user.id} user={user} />
				</div>
			))}
			{spacerCount > 0 &&
				Array(spacerCount)
					.fill(null)
					.map((_, index) => (
						<div key={`spacer-${index}`} className={styles.spacer}></div>
					))}
		</div>

	);
}
