import './App.css';
import React from "react";
import MainPage from "./components/containers/admin/MainPage";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import AboutPage from "./components/containers/admin/AboutPage";
import ServicesPage from "./components/containers/admin/ServicesPage";
import ContactPage from "./components/containers/admin/ContactPage";
import ProjectsPage from "./components/containers/admin/ProjectsPage";
import DailyProgressReport from "./components/containers/admin/DailyProgressReport";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="projects" element={<ProjectsPage />} />
              <Route path="projects/:name" element={<DailyProgressReport />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
