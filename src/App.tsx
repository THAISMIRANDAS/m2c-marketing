import React from 'react';
import Header from './components/Heater';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import ClientProperties from './components/ClientProperties';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <ClientProperties />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
