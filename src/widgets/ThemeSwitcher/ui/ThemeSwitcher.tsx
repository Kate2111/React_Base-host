import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/provider/theme';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme();
    const inputId = 'theme-switcher';

    return (
        <label htmlFor={inputId} className={classNames(styles.ThemeSwitcher, {}, [className])}>
            <input id={inputId} type="checkbox" className={styles.input} onChange={toggleTheme} />
            <span className={styles.slider} />
        </label>
    );
};
