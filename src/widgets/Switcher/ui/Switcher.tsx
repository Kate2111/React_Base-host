import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './Switcher.module.scss'
import {useTheme} from "app/provider/theme";

interface SwitcherProps {
    className?: string;
}

export const Switcher: FC<SwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <label className={classNames(styles.Switcher, {}, [className])}>
            <input type="checkbox" className={styles.input} onChange={toggleTheme}/>
            <span className={styles.slider}></span>
        </label>
    );
};


