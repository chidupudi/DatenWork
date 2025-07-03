import React from 'react';
import Header from '../components/common/Header';
import Hero from '../components/sections/Hero';
import TrainingCourses from '../components/sections/TrainingCourses';
import PlacementServices from '../components/sections/PlacementServices';
import IndustryRequirements from '../components/sections/IndustryRequirements';
import ITConsultancy from '../components/sections/ITConsultancy';
import Testimonials from '../components/sections/Testimonials';
import Services from '../components/sections/Services';
import Footer from '../components/sections/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <TrainingCourses />
      <PlacementServices />
      <IndustryRequirements />
      <ITConsultancy />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;