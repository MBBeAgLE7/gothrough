import './App.css';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Selection from './Components/Selection';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import axios from 'axios';

function App() {
  const [contain, setContain] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://real-time-pnr-status-api-for-indian-railways.p.rapidapi.com/name/${8119853741}`, {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '03a6fc1c64msh9ca81b434e634bfp123553jsnd3933bc0fec7',
            'x-rapidapi-host': 'real-time-pnr-status-api-for-indian-railways.p.rapidapi.com'
          }
        });
        const data = await response.json();
        setContain(data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="absolute top-0 z-[-2] h-auto w-full rotate-360 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(209,250,253,1.8)_100%)]">
        <Hero />
        <About />
        <Selection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
