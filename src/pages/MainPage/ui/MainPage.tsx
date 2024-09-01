import React, {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './MainPage.module.scss'
import {Button, ButtonTheme} from "shared/ui";
import LoveImg from 'shared/assets/img/love.png'

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = ({className}) => {
    return (
        <div className={classNames(styles.MainPage, {}, [className])}>
            MainPage
            <Button theme={ButtonTheme.CLEAR}>button</Button>
            <img src={LoveImg} style={{ width: '150px' }} />
        </div>
    );
};

export default MainPage;
