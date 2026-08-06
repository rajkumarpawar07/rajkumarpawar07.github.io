import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Loading from './components/loading/Loading';
import ClickSpark from './components/ClickSpark';
import './App.css';

const Home = lazy(() => import('./pages/home/Home'));
const ProjectsLayout = lazy(() => import('./pages/projects/ProjectsLayout'));
const UsesLayout = lazy(() => import('./pages/uses/UsesLayout'));
const ResumeLayout = lazy(() => import('./pages/resume/ResumeLayout'));
const PageNotFound = lazy(() => import('./pages/notFound/PageNotFound'));

export const App: React.FC = () => {
  return (
    <BrowserRouter>
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
