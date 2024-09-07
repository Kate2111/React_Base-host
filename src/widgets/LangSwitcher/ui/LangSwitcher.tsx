import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './LangSwitcher.module.scss'
import {Button, ButtonTheme} from "shared/ui";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        try {
            await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <Button
            onClick={toggle}
            theme={ButtonTheme.CLEAR}
            className={classNames(styles.LangSwitcher, {}, [className])}
        >
            {t('Язык')}
        </Button>
    );
};


