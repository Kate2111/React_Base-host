import {lazy} from "react";

//@ts-ignore
export const AboutPageLazy = lazy(() => new Promise(resolve => setTimeout(() => resolve(import('pages/AboutPage/ui/AboutPage')), 1500)));