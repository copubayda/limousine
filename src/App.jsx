import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/toaster';
import { useToast } from './components/ui/use-toast';
import Header from './components/sections/Header';
import HomePage from './pages/HomePage';
import FleetPage from './pages/FleetPage';
import ReservationPage from './pages/ReservationPage';
import AirportTransferPage from './pages/AirportTransferPage';
import Footer from './components/sections/Footer';
import Reservation from './components/ui/Reservation';
import * as Dialog from '@radix-ui/react-dialog';
import Gallery from './components/sections/Gallery';

function App() {
  const { toast } = useToast();
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleCall = () => {
    window.location.href = 'tel:+41762121129';
  };

  const handleReservation = () => {
    setIsReservationOpen(true);
  };

  const commonHandlers = { handleCall, handleReservation };

  return (
    <Router>
      <Helmet>
        <title>LimoKeyser - Service Chauffeur VTC & Limousine à Neuchâtel</title>
        <meta name="description" content="Découvrez Limousine Keyse, votre service de transport VTC et limousine de luxe avec Mercedes V-Class à Neuchâtel. Ponctualité, confort et professionnalisme garantis." />
        <meta property="og:title" content="Limousine Keyse - Service Chauffeur VTC & Limousine à Neuchâtel" />
        <meta property="og:description" content="Découvrez Limousine Keyse, votre service de transport VTC et limousine de luxe avec Mercedes V-Class à Neuchâtel. Ponctualité, confort et professionnalisme garantis." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-[#111111] text-gray-200 overflow-x-hidden">
        <Header {...commonHandlers} />
        <main>
            <Routes>
              <Route path="/" element={<HomePage {...commonHandlers} />} />
              <Route path="/fleet" element={<FleetPage {...commonHandlers} />} />
              <Route path="/gallery" element={<Gallery {...commonHandlers} />} />
              <Route path="/reservation" element={<ReservationPage />} />
              <Route path="/transferts-aeroport" element={<AirportTransferPage handleCall={handleCall} handleReservation={handleReservation} />} />
            </Routes>
        </main>
        <Footer isReservationOpen={isReservationOpen} setIsReservationOpen={setIsReservationOpen} />

        <Dialog.Root open={isReservationOpen} onOpenChange={setIsReservationOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/70 z-[999]" />
            <Dialog.Content className="fixed top-1/2 left-1/2 z-[1000] transform -translate-x-1/2 -translate-y-1/2 max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-[#111111] border border-gray-800 rounded-xl p-0">
              <Reservation />
              <Dialog.Close asChild>
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  aria-label="Fermer"
                >
                  ✕
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <Toaster />
      </div>
    </Router>
  );
};

export default App;
