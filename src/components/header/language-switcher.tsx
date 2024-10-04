'use client'
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname(); 
    const t = useTranslations();

    const handleLanguageChange = () => {
        const currentLocale = pathname.startsWith('/en') ? 'en' : 'ro';
        const newLocale = currentLocale === 'en' ? 'ro' : 'en'; 
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        
        router.push(newPath);
    };

    return (
        <button onClick={handleLanguageChange}>
                 {pathname.startsWith('/en') ? t('language') : t('language')}
        </button>
    )
}
