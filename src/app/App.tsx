import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {classNames} from "shared/classNames/classNames";
import {useTheme} from "app/provider/theme";
import {MainPageLazy} from "pages/MainPage";
import {AboutPageLazy} from "pages/AboutPage";

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy/>} />
                    <Route path="/about" element={<AboutPageLazy/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;