import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withRouterCustom from '../hooks/withRouter';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Portfolio } from '../pages/portfolio';
import { Project1 } from '../pages/portfolio/project1/project1';
import { Project2 } from '../pages/portfolio/project2/project2';
import { Project3 } from '../pages/portfolio/project3/project3';
import { Project4 } from '../pages/portfolio/project4/project4';
import { ContactUs } from '../pages/contact';
import { Socialicons } from '../components/socialicons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimatedRoutes = withRouterCustom(() => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{
          enter: 400,
          exit: 400,
        }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/project1" element={<Project1 />} />
          <Route path="/portfolio/project2" element={<Project2 />} />
          <Route path="/portfolio/project3" element={<Project3 />} />
          <Route path="/portfolio/project4" element={<Project4 />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
});

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
