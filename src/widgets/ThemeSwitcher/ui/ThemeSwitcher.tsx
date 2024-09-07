import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss'
import {useTheme} from "app/provider/theme";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <label className={classNames(styles.ThemeSwitcher, {}, [className])}>
            <input type="checkbox" className={styles.input} onChange={toggleTheme}/>
            <span className={styles.slider}></span>
        </label>
    );
};


