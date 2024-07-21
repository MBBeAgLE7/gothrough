import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';


function App() {
  return (
    <>
    <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(209,250,253,1.8)_100%)]"></div>
    <Hero/>
    <Navbar/>
    </>
  );
}

export default App;
