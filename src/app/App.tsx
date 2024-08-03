import React from 'react';
import LoginPage from "../pages/LoginPage.tsx";
import {Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage/>} />
        </Routes>
    );
};

export default App;