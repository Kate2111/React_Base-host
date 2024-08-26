import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import {useTheme} from "./theme/useTheme";

const MainPageLazy = lazy(() => import('./pages/MainPage/MainPage'));
//@ts-ignore
const AboutPageLazy = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./pages/AboutPage/AboutPage')), 1500)));

const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
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