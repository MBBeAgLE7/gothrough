import './App.css';
import Navbar from './Components/Navbar';
import { useEffect, useState } from 'react';
import Hero from './Components/Hero';
import About from './Components/About';
import Selection from './Components/Selection';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import axios from 'axios';
import Card from './Components/Card';

function App() {
  const [contain, setContain] = useState([]);
  const [train, setTrain] = useState('');

  const onChangeTrain = (e) => {
    setTrain(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (train.length === 5) {
        const url = 'https://trainjourney-irctc-api.p.rapidapi.com/api/train/trainv2?Disclaimer=This%20train%20running%20information%20is%20not%20affiliated%20with%20or%20endorsed%20by%20Indian%20Railways%20or%20IRCTC.&date=07032024&apikey=5eb5f408&search=12814';
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '03a6fc1c64msh9ca81b434e634bfp123553jsnd3933bc0fec7',
            'x-rapidapi-host': 'trainjourney-irctc-api.p.rapidapi.com'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.text();
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      }
    };

    fetchData();
  }, [train]);

  return (
    <>
      <Navbar />
      <div className="absolute top-0 z-[-2] h-auto w-full rotate-360 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(209,250,253,1.8)_100%)]">
        <Hero />
        <About />
        <Selection />
        <Card />
        <input
          className="m-10 p-3"
          placeholder="Enter The Name Here"
          onChange={onChangeTrain}
          value={train}
        ></input>
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
