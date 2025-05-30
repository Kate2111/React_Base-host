import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import LoveImg from 'shared/assets/img/love.png';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui';
import styles from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            <h1>{t('Главная страница')}</h1>
            <img src={LoveImg} style={{ width: '150px' }} alt={t('love')} />
            <Button theme={ButtonTheme.LIGHT}>{t('Кнопка')}</Button>
        </div>
    );
};

export default MainPage;
