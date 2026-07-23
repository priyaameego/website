import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import CompanyOverview from './pages/about/CompanyOverview';
import VisionMission from './pages/about/VisionMission';
import Manufacturing from './pages/about/Manufacturing';
import Distribution from './pages/about/Distribution';
import Founder from './pages/about/Founder';
import Timeline from './pages/about/Timeline';
import Leadership from './pages/about/Leadership';
import CoreValues from './pages/about/CoreValues';
import Infrastructure from './pages/about/Infrastructure';
import Certifications from './pages/about/Certifications';
import Sustainability from './pages/about/Sustainability';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Industries from './pages/Industries';
import ShakshiBrand from './pages/brands/ShakshiBrand';
import EasylifeBrand from './pages/brands/EasylifeBrand';
import SoftlineBrand from './pages/brands/SoftlineBrand';
import IntimacyBrand from './pages/brands/IntimacyBrand';
import IndustrialEnquiry from './pages/IndustrialEnquiry';

function App() {
  return (
    <Router>
      <CustomCursor />
      <SmoothScroll>
        <div className="bg-[#1e2233] min-h-screen text-steel-gray font-body overflow-x-hidden">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/about/overview" element={<CompanyOverview />} />
            <Route path="/about/manufacturing" element={<Manufacturing />} />
            <Route path="/about/distribution" element={<Distribution />} />
            <Route path="/about/founder" element={<Founder />} />
            <Route path="/about/timeline" element={<Timeline />} />
            <Route path="/about/vision" element={<VisionMission />} />
            <Route path="/about/leadership" element={<Leadership />} />
            <Route path="/about/values" element={<CoreValues />} />
            <Route path="/about/infrastructure" element={<Infrastructure />} />
            <Route path="/about/certifications" element={<Certifications />} />
            <Route path="/about/sustainability" element={<Sustainability />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/brands/shakshi" element={<ShakshiBrand />} />
            <Route path="/brands/easylife" element={<EasylifeBrand />} />
            <Route path="/brands/softline" element={<SoftlineBrand />} />
            <Route path="/brands/intimacy" element={<IntimacyBrand />} />
            <Route path="/industrial-enquiry" element={<IndustrialEnquiry />} />
          </Routes>
          
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
