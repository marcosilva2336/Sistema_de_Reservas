import React from 'react';
import Header from "../components/Header/Header";
import HomeClient from "../components/Home/HomeClient";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeClient />
      <Footer />
    </div>
  );
}