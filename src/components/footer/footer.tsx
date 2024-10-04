import { useTranslations } from 'next-intl';
import styles from './footer.module.scss'; 

export default function Footer() {
    const t = useTranslations('');

    return (
        <footer className={styles.footer}>
            <p>{t('footer')}</p>
        </footer>
    );
}
