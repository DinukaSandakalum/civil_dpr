import React, {useEffect, useState} from "react";
import MainPage from "./components/containers/admin/MainPage";
import {BrowserRouter} from "react-router-dom";
import {Navigate, Route, Routes, useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import LoginPage from "./components/containers/admin/loginPage";
import AboutPage from "./components/containers/admin/AboutPage";
import ServicesPage from "./components/containers/admin/ServicesPage";
import ContactPage from "./components/containers/admin/ContactPage";
import ProjectsPage from "./components/containers/admin/ProjectsPage";
import DailyProgressReport from "./components/containers/admin/DailyProgressReport";

function App() {

    const user = useSelector(state => state.user);

        return (
            <BrowserRouter>
                <Routes>
                    {user && user.user && user.user.responseBody && (user.user.responseBody.userRole === 'ADMIN' || user.user.responseBody.userRole === 'PM' || user.user.responseBody.userRole === 'USER') ? (
                        <>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/projects/:name" element={<DailyProgressReport />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </>
                    ) : (
                        <Route path="login" element={<LoginPage />} />
                    )}
                </Routes>
            </BrowserRouter>
        );
}

export default App;
