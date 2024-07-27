import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Card from './Components/Card';


function App() {
  return (
    <>
    <div className="absolute top-0 z-[-2] h-auto w-full rotate-360 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(209,250,253,1.8)_100%)]">
      <Hero/>
    </div>
    <Navbar/>
    <Card/>
    </>
  );
}

export default App;
