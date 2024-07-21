import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='w-screen h-auto content-center'>
      <h1 className='m-0 p-0 text-5xl text-center font-medium'>About Us</h1>
      <div className='text-wrap p-10'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam in at optio omnis placeat facere accusamus animi laborum deserunt labore quas iure corporis voluptate temporibus, minima perspiciatis exercitationem nesciunt, quisquam dolorem dignissimos voluptas! Quisquam sapiente maxime accusamus enim totam quibusdam dolores velit! Pariatur maxime incidunt ad accusantium? Repudiandae consequuntur soluta veritatis culpa omnis illum consequatur, ratione deserunt tempora cupiditate ad beatae temporibus non eveniet provident id similique quis veniam quia tenetur, sapiente dolorum aut esse doloremque? Enim consequuntur ea recusandae quam, cupiditate veritatis nulla animi distinctio consectetur autem? Hic impedit accusantium cupiditate quam, nam cumque iusto corrupti mollitia repellat iure?
      </div>

      <div className='text-center absolute w-screen'><Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      </div>
    </div>
  );
}

export default About;
