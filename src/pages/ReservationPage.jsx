import React from 'react';
import Reservation from '../components/ui/Reservation';

const ReservationPage = () => {
  return (
    <div className="min-h-screen bg-[#111111] text-gray-200">
      <section className="section-padding">
        <div className="container-custom">
         
          <Reservation />
        </div>
      </section>
    </div>
  );
};

export default ReservationPage;
