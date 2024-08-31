import React from 'react';
import LoveImg from 'shared/assets/img/love.png'
import {Button, ButtonTheme} from "shared/ui";

const MainPage = () => {
    return (
        <div>
            MainPage
            <img src={LoveImg} style={{ width: '150px' }} />
            <Button theme={ButtonTheme.CLEAR}>button</Button>
        </div>
    );
};

export default MainPage;
