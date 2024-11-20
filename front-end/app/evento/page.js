import React from 'react';
import CreateEvent from '../../components/CreateEvent/CreateEvent';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function CreateEventPage() {
  return (
    <div>
      <Header showSearch={false} />
      <CreateEvent />
      <Footer />
    </div>
  );
}