import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import MoreInfoPage from 'pages/MoreInfoPage';
import OnboardingPage from 'pages/OnboardingPage';
import TeampleHomePage from 'pages/TeampleHomePage';
import TeampleDetailPage from 'pages/TeampleDetailPage';
import TemplatePage from 'pages/TemplatePage';
import ProfilePage from 'pages/ProfilePage';
import FilePage from 'pages/FilePage';
import NotFoundPage from 'pages/NotFoundPage';
import AddTeample1 from 'components/popup/AddTeample1';
import AddTeample2 from 'components/popup/AddTeample2';
import InitialHomePage from './pages/InitialHomePage';
import Ing from 'pages/Ing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* 초대받았으면 path에 팀 id - 이렇게 하는게 맞는 건지는 모름 */}
        <Route path="/login/:teamid" element={<LoginPage />} />
        <Route path="/moreinfo" element={<MoreInfoPage />} />
        <Route path="/home/init" element={<InitialHomePage />} />
        <Route path="/teample-home/:teamid" element={<TeampleHomePage />} />
        <Route path="/teample-detail" element={<TeampleDetailPage />} />
        <Route path="/template" element={<TemplatePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/file" element={<FilePage />} />
        <Route path="/ing" element={<Ing />} />
        {/* modals */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
