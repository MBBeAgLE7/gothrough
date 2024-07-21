import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Player } from '@lottiefiles/react-lottie-player';
import '../App.css';

const About = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    draggable: true,
    swipe: true,
    touchMove: true,
  };

  const features = [
    {
      title: "Search Trains",
      description: "Allow users to search for trains between specific stations.",
      icon: "https://cdn.lordicon.com/pagmnkiz.json"
    },
    {
      title: "Connecting Trains",
      description: "Display available connecting trains to reach a destination.",
      icon: "https://cdn.lordicon.com/uvqdhrsk.json"
    },
    {
      title: "Train Schedules",
      description: "Show train schedules and timings.",
      icon: "https://cdn.lordicon.com/abfverha.json"
    },
    {
      title: "Real-Time Updates",
      description: "Provide real-time updates on train status and delays.",
      icon: "https://cdn.lordicon.com/rsbokaso.json"
    },
    {
      title: "Booking Information",
      description: "Offer booking information and links to book tickets.",
      icon: "https://cdn.lordicon.com/yxczfiyc.json"
    },
    {
      title: "Station Information",
      description: "Provide information about stations, including facilities and services.",
      icon: "https://cdn.lordicon.com/surcxhka.json"
    },
    {
      title: "Route Maps",
      description: "Display route maps for different train journeys.",
      icon: "https://cdn.lordicon.com/sscmlqij.json"
    },
    {
      title: "Fare Calculator",
      description: "Calculate fares for journeys between stations.",
      icon: "https://cdn.lordicon.com/rguiapej.json"
    },
    {
      title: "User Profile",
      description: "Allow users to create and manage their profiles.",
      icon: "https://cdn.lordicon.com/xzalkbkz.json"
    },
    {
      title: "Notifications",
      description: "Send notifications about train schedules, delays, and booking confirmations.",
      icon: "https://cdn.lordicon.com/rhvddzym.json"
    }
  ];

  return (
    <div className='w-full'>
      <div className='flex flex-row gap-4 items-center justify-center mt-40'>
      <div className='bg-gray-700 w-[6px] h-10 text-gray-700'>i</div>
      <div><h1 className='p-0 text-5xl text-center font-medium'>About Us</h1></div>
      </div>
      <div className='text-justify p-10'>
        <span className='font-bold text-2xl pb-10'>GoThrough,  </span><span>Your ultimate destination for all things related to train travel. Our platform is designed to simplify your journey, offering a comprehensive suite of features that cater to all your travel needs. From searching for trains between specific stations to providing real-time updates on train status and delays, we ensure you have all the information at your fingertips.<br/><br/>

        At TrainFinder, we understand the importance of seamless travel planning. That's why we offer detailed train schedules, connecting trains, and route maps to help you plan your journey with ease. Whether you're looking for booking information, fare calculations, or station facilities, our platform has got you covered.
<br/>
<br/>
        Our mission is to enhance your travel experience by providing accurate, up-to-date information and user-friendly features. With a commitment to excellence, we continuously strive to improve our services and bring you the best in train travel solutions. Join our community of satisfied travelers and discover the convenience of TrainFinder today.</span>
      </div>

      <div className="carousel">
        <div className="inner m-10 w-auto p-2">
          <Slider {...settings}>
            {features.map((item, index) => (
              <div key={index} className='p-6 rounded-xl border-2 border-black shadow-[10px_0_10px_-10px_black] text-center flex flex-col justify-center items-center h-80 w-auto m-auto'>
                <h3 className='text-xl font-bold mb-2'>{item.title}</h3>
                <div className='text-center'>
                  <Player src={item.icon} loop autoplay style={{ height: '130px', width: '130px' }} />
                </div>
                <div className='text-center p-2 text-wrap'>
                  {item.description}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default About;
