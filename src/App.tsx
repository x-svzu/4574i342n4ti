import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/tenets-and-purpose" element={<TenetsAndPurpose />} />
        <Route path="/our-history" element={<OurHistory />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/membership-rewards" element={<MembershipRewards />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/global-initiatives" element={<GlobalInitiatives />} />
        <Route path="/charity-programs" element={<CharityPrograms />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/global-presence" element={<GlobalPresence />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </Router>
  );
}
