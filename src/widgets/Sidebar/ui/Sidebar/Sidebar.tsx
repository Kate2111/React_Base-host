import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Left from 'shared/assets/icons/left.svg';
import Right from 'shared/assets/icons/right.svg';
import { Button, ButtonTheme } from 'shared/ui';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(true);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <div className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button
                className={styles.button}
                theme={ButtonTheme.CLEAR}
                onClick={onToggle}
            >
                {collapsed ? <Right fill="#818181" /> : <Left fill="#818181" /> }
            </Button>
        </div>
    );
};
