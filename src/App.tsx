import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";


const MainPageLazy = lazy(() => import('./pages/MainPage/MainPage'));
//@ts-ignore
const AboutPageLazy = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('./pages/AboutPage/AboutPage')), 1500)));

const App = () => {
    return (
        <div className="app">
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