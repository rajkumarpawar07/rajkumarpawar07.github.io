import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Loading from './components/loading/Loading';
import ClickSpark from './components/ClickSpark';
import './App.css';

const Home = lazy(() => import('./pages/home/Home'));
const ProjectsLayout = lazy(() => import('./pages/projects/ProjectsLayout'));
const UsesLayout = lazy(() => import('./pages/uses/UsesLayout'));
const ResumeLayout = lazy(() => import('./pages/resume/ResumeLayout'));
const PageNotFound = lazy(() => import('./pages/notFound/PageNotFound'));

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ClickSpark sparkCount={14} duration={600}>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<ProjectsLayout />} />
            <Route path="/uses" element={<UsesLayout />} />
            <Route path="/resume" element={<ResumeLayout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ClickSpark>
    </BrowserRouter>
  );
};

export default App;
