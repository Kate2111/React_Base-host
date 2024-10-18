import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.NotFoundPage, {}, [className])}>
            <p>{t('Данной страницы не существует')}</p>
        </div>
    );
};

export default NotFoundPage;
