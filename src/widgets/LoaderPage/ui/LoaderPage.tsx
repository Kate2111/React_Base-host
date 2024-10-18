import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui';
import styles from './LoaderPage.module.scss';

interface LoaderPageProps {
    className?: string;
}

export const LoaderPage: FC<LoaderPageProps> = ({ className }) => (
    <div className={classNames(styles.LoaderPage, {}, [className])}>
        <Loader />
    </div>
);
