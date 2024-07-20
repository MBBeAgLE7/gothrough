import './App.css';
import Navbar from './Components/Navbar';
import Move from './Components/Move';



function App() {
  return (
    <>
    <div className='train'>
      <div className='train-box'>
      <Move/>        
      </div>
      <div className='content-box'>
        <h1 className='content-1'>Welcome To</h1>
        <h3 className='content-2'>Go Through</h3>
      </div>
    </div>
    <Navbar/>
    </>
  );
}

export default App;
