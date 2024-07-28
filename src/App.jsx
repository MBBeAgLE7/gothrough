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
        const url = `https://indian-railway-irctc.p.rapidapi.com/api/trains-search/v1/train/${train}?isH5=true&client=web`;
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '9e86176efbmshb1604eee4f21f79p1a944ejsnacf68937b258',
            'x-rapidapi-host': 'indian-railway-irctc.p.rapidapi.com',
            'x-rapid-api': 'rapid-api-database'
          }
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
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
          className="m-10 p-3 w-64"
          placeholder="Enter The train Number Here"
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
