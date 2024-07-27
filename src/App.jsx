import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Selection from './Components/Selection';
import About from './Components/About';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://irctc1.p.rapidapi.com/api/v1/searchStation',
  params: {query: 'BJU'},
  headers: {
    'x-rapidapi-key': 'Sign Up for Key',
    'x-rapidapi-host': 'irctc1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
import Card from './Components/Card';


function App() {
  return (
    <>
    <Navbar/>
    <div className="relative top-0 z-[-2] h-auto w-full rotate-360 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(209,250,253,1.8)_100%)]">
      <Hero/>
    <About/>
    <Selection/>
    </div>
    <Navbar/>
    </>
  );
}

export default App;
