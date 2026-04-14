import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Toaster } from "@/components/ui/toaster";
import HomePage from './app/page';
import WhoWeAre from './app/who-we-are/page';
import OurMission from './app/our-mission/page';
import TenetsAndPurpose from './app/tenets-and-purpose/page';
import OurHistory from './app/our-history/page';
import Membership from './app/membership/page';
import MembershipRewards from './app/membership-rewards/page';
import Testimonials from './app/testimonials/page';
import GlobalInitiatives from './app/global-initiatives/page';
import CharityPrograms from './app/charity-programs/page';
import FAQs from './app/faqs/page';
import Contact from './app/contact/page';
import PrivacyPolicy from './app/privacy-policy/page';
import TermsOfService from './app/terms-of-service/page';
import CookiePolicy from './app/cookie-policy/page';
import GlobalPresence from './app/global-presence/page';
import Leadership from './app/leadership/page';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/who-we-are" element={<PageTransition><WhoWeAre /></PageTransition>} />
          <Route path="/our-mission" element={<PageTransition><OurMission /></PageTransition>} />
          <Route path="/tenets-and-purpose" element={<PageTransition><TenetsAndPurpose /></PageTransition>} />
          <Route path="/our-history" element={<PageTransition><OurHistory /></PageTransition>} />
          <Route path="/membership" element={<PageTransition><Membership /></PageTransition>} />
          <Route path="/membership-rewards" element={<PageTransition><MembershipRewards /></PageTransition>} />
          <Route path="/testimonials" element={<PageTransition><Testimonials /></PageTransition>} />
          <Route path="/global-initiatives" element={<PageTransition><GlobalInitiatives /></PageTransition>} />
          <Route path="/charity-programs" element={<PageTransition><CharityPrograms /></PageTransition>} />
          <Route path="/faqs" element={<PageTransition><FAQs /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
          <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
          <Route path="/cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
          <Route path="/global-presence" element={<PageTransition><GlobalPresence /></PageTransition>} />
          <Route path="/leadership" element={<PageTransition><Leadership /></PageTransition>} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="dark antialiased bg-background text-foreground min-h-screen">
      <Router>
        <ScrollToTop />
        <ScrollToTopButton />
        <AnimatedRoutes />
      </Router>
      <Toaster />
    </div>
  );
}
