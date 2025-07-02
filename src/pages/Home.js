import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Footer from '../components/sections/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;