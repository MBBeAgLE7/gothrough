import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Player } from '@lottiefiles/react-lottie-player';
import '../App.css';

const About = () => {
  var settings = {
    scroll: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      <h1 className='m-0 p-0 text-5xl text-center w-full h-auto font-medium'>About Us</h1>
      <div className='text-justify p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis, eligendi accusamus a enim, quod inventore neque maxime, dolore harum nam. Eos voluptate commodi repellendus nostrum qui quasi voluptas, excepturi consequuntur dolor dicta. Doloremque vero molestias unde.</div>


      <div className="carsouel">
        <div className="inner m-10 w-auto p-2">
          <Slider {...settings}>
            {features.map((item, index) => (
              <div className='p-6 rounded-xl bg-yellow-300 border-2 text-center flex flex-col justify-center items-center h-80 w-60 m-auto'>
                <h3 className='text-xl mb-2'>{item.title}</h3>
                <div key={index} className='text-center'>
                  <Player src={item.icon} loop autoplay style={{ height: '150px', width: '150px' }} />
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
