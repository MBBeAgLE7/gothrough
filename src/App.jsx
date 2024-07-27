import './App.css';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Selection from './Components/Selection';
import Contact from './Components/Contact';
import axios from 'axios';
import Footer from './Components/Footer';

function App() {
  const [stnName, setstnName] = useState('');
  const [contain , setcontain] = useState([]);

  fetch('https://irctc1.p.rapidapi.com/api/v1/searchStation?query=BJU', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '03a6fc1c64msh9ca81b434e634bfp123553jsnd3933bc0fec7',
      'x-rapidapi-host': 'irctc1.p.rapidapi.com'
    }
  })
  .then(response => {
    console.log(response.json());
  })
  .catch(err => {
    console.error(err);
  })

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
