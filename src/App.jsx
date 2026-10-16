
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import RecentEvents from './components/RecentEvents';
import AboutSection from './components/AboutSection';
import BentoFeatures from './components/BentoFeatures';
import Excom from './components/Excom';
import Footer from './components/Footer';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactPage from './pages/ContactPage';
import TBIPage from './pages/TBIPage';
import ExecomProfilePage from './pages/ExecomProfilePage';
import MemberProfilePage from './pages/MemberProfilePage';

import EngraversPage from './pages/EngraversPage';
import HobbyHubPage from './pages/HobbyHubPage';
import NotFoundPage from './pages/NotFoundPage';
import RulesPage from './pages/RulesPage';
import NISPPage from './pages/NISPPage';
import ScrollingRibbon from './components/common/ScrollingRibbon';
import { useEffect } from 'react';
import Lenis from 'lenis';

import CardSection from './components/common/CardSection';

// Simple placeholder for pages not fully implemented
const PlaceholderPage = ({ title }) => (
  <div style={{ paddingTop: '8rem' }}>
    <CardSection>
      <div style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '4rem', marginBottom: '1rem', color: 'var(--text-primary)', letterSpacing: '-1.5px', fontWeight: '700' }}>{title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Content coming soon...</p>
      </div>
    </CardSection>
  </div>
);

const Home = () => (
  <>
    <Hero />
    <Achievements />
    <BentoFeatures />
    <AboutSection />
    <RecentEvents />
    <Excom />
  </>
);

import { ThemeProvider } from './context/ThemeContext';

const AppContent = () => {
  const location = useLocation();
  // Check if route starts with /qr/execom
  const isQrRoute = location.pathname.startsWith('/qr/execom/');

  return (
    <div className="app">
      {!isQrRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div style={{ paddingTop: '6rem' }}><AboutSection /></div>} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/ipl" element={<PlaceholderPage title="IPL 2.0" />} />

        <Route path="/tbi" element={<TBIPage />} />
        <Route path="/startups/engravers" element={<EngraversPage />} />
        <Route path="/startups/hobbyhub" element={<HobbyHubPage />} />
        <Route path="/execom/:roleId" element={<ExecomProfilePage />} />
        <Route path="/execom/:roleId/:subRoleId" element={<MemberProfilePage isQrMode={false} />} />
        <Route path="/qr/execom/:roleId/:subRoleId" element={<MemberProfilePage isQrMode={true} />} />

        <Route path="/rules" element={<RulesPage />} />
        <Route path="/nisp" element={<NISPPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isQrRoute && <ScrollingRibbon />}
      {!isQrRoute && <Footer />}
    </div>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
