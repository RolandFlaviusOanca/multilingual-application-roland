'use client'
import Image from "next/image";
import styles from "./usercard.module.scss";
import { UserCardProps } from "@/lib/types";
import UserInfo from "./user-info";
import Button from "@/components/ui/button/button";
import { useTranslations } from "next-intl";
import { useAtom } from "jotai";
import { favoritesWithPersistenceAtom } from "@/atoms/favoritesAtom";
import { useCallback, useEffect, useState } from "react";
import { UserType } from "@/lib/types"; 

export default function UserCard({ user }: { user: UserType }) {
    const [favorites, setFavorites] = useAtom(favoritesWithPersistenceAtom);
    const [isMounted, setIsMounted] = useState(false);
    const t = useTranslations("");

    useEffect(() => {
        setIsMounted(true);
    }, []);


    const isFavorite = favorites.some((favUser: UserType) => favUser.id === user.id);

    const toggleFavorite = useCallback(() => {
        if (isMounted) {
            setFavorites((prevFavorites) => {
                if (isFavorite) {
                    return prevFavorites.filter((favUser) => favUser.id !== user.id);
                } else {
                    return [...prevFavorites, user];
                }
            });
        }
    }, [isFavorite, setFavorites, user, isMounted]);

    if (!isMounted) {
        return null; 
    }
    return (
        <>
            <div className={styles.userCard}>
                <div className={styles.userCardHeader}>
                    <h3>{user.name}</h3>
                    <Image
                        width={60}
                        height={60}
                        src={user.img}
                        alt={`${user.name}'s profile picture`}
                    />
                </div>
            </div>
            <UserInfo
                username={user.username}
                email={user.email}
                phone={user.phone}
                address={user.address}
                website={user.website}
            />
            <Button
                label={isFavorite ? t("removeFavorite") : t("addFavorite")}
                className={isFavorite ? styles.danger : styles.button}
                onClick={toggleFavorite}
            />
        </>
    );
}
