import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps > = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <Button onClick={reloadPage}>
                {t('Обносить страницу')}
            </Button>
        </div>
    );
};
