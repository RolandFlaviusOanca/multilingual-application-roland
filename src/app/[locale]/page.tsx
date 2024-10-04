import Image from "next/image";
import styles from "./page.module.scss";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <h1>{t('title')}</h1>
  );
}
