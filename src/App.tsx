import { useState, lazy, Suspense } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const ServicesGrid = lazy(() => import('./components/ServicesGrid'));
const CrystalShop = lazy(() => import('./components/CrystalShop'));
const AboutFounder = lazy(() => import('./components/AboutFounder'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FeedbackForm = lazy(() => import('./components/FeedbackForm'));
const Community = lazy(() => import('./components/Community'));
const Footer = lazy(() => import('./components/Footer'));
const BookingModal = lazy(() => import('./components/BookingModal'));

// Define the Service interface for better type safety and reusability
interface Service {
  title: string;
  type: 'numerology' | 'tarot' | 'kundli' | 'reiki' | 'nlp' | 'counseling';
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleBookService = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleBookDiscovery = () => {
    setSelectedService({
      title: '1-on-1 Counseling',
      type: 'counseling',
    });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    // Delay clearing the data slightly to allow the modal close animation to finish
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <div className="relative min-h-screen bg-slate-950">
      <Header />
      <Hero />
      <TrustIndicators />
      <Suspense fallback={<div className="min-h-screen" />}>
        <ServicesGrid onBookService={handleBookService} />
        <CrystalShop />
        <AboutFounder onBookDiscovery={handleBookDiscovery} />
        <Testimonials />
        <FeedbackForm />
        <Community />
        <Footer />
        <BookingModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      </Suspense>
      <FloatingWhatsApp />
    </div>
  );
}

export default App;