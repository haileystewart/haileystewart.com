import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import withRouterCustom from '../hooks/withRouter';
import { Home } from '../pages/home';
import { About } from '../pages/about';
import { Portfolio } from '../pages/portfolio';
import { CryptographicHashingRDA } from '../pages/portfolio/sha256_rsa_implementation/sha256_rsa_implementation';
import { Battleship } from '../pages/portfolio/battleship/battleship';
import { BotnetDetection } from '../pages/portfolio/botnet_detection/botnet_detection';
import { AWSHangmanServer } from '../pages/portfolio/aws_hangman_server/aws_hangman_server';
import ContactUs from '../pages/contact';
import { Socialicons } from '../components/socialicons';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Photography } from '../pages/photography/photography';

// Define page-specific colors
const pageColors = {
  // Home Page
  "/": "--color-25",

  //About page
  "/about": "--color-25",

  // Portfolio Page
  "/portfolio": "--color-25",
  
  "/portfolio/sha256_rsa_implementation": "--color-10",
  "/portfolio/battleship": "--color-12",
  "/portfolio/botnet_detection": "--color-15",
  "/portfolio/aws_hangman_server": "--color-18",

  //Contact Page
  "/contact": "--color-25",
};

// Function to dynamically set colors based on route
const SetPageColors = () => {
  const location = useLocation();

  useEffect(() => {
    const hoverColor = pageColors[location.pathname] || "--color-24"; // Default to color-24
    document.documentElement.style.setProperty("--breadcrumb-hover-color", `var(${hoverColor})`);
    document.documentElement.style.setProperty("--menu-hover-color", `var(${hoverColor})`);
  }, [location]);

  return null;
};

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
          <Route path="/portfolio/sha256_rsa_implementation" element={<CryptographicHashingRDA />} />
          <Route path="/portfolio/battleship" element={<Battleship />} />
          <Route path="/portfolio/botnet_detection" element={<BotnetDetection />} />
          <Route path="/portfolio/aws_hangman_server" element={<AWSHangmanServer />} />
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
      <SetPageColors /> {/* Dynamically set page colors */}
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
