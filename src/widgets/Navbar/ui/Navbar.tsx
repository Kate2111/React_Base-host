import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={styles.mainLink}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('О сайте')}
                </AppLink>
            </div>
            <div className={styles.buttons}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
