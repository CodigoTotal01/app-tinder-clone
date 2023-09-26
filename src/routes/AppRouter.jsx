import {Route, Routes} from "react-router-dom";
import {Dashboard, OnBoarding, Home} from "../pages/index.js";

//Router principal del programa
export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/onboarding" element={<OnBoarding/>}/>
        </Routes>
    )
}