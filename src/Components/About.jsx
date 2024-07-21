import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const About = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
        <h1 className='m-0 p-0 text-5xl text-center w-full h-auto font-medium'>About Us</h1>
        <p className='text-wrap p-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis, eligendi accusamus a enim, quod inventore neque maxime, dolore harum nam. Eos voluptate commodi repellendus nostrum qui quasi voluptas, excepturi consequuntur dolor dicta. Doloremque vero molestias unde, ab illo esse nemo omnis. Commodi libero doloremque maxime consequatur odio sequi accusantium cupiditate adipisci modi numquam eveniet, facere minus earum eligendi odit fuga? Suscipit quas perferendis, at explicabo ipsa debitis, vel, beatae asperiores harum optio cupiditate accusantium facilis nesciunt aspernatur architecto iste incidunt. Explicabo consequatur illum laboriosam enim neque, dolores ex tempore illo nisi necessitatibus deleniti eveniet et possimus autem quisquam voluptatibus dolor veritatis numquam similique veniam! Eaque aut velit rem. Cumque omnis a eius necessitatibus facere odit officia, sequi doloremque. Provident asperiores inventore, nemo est rerum deserunt reiciendis voluptatum? Omnis dolorum aliquid impedit molestias fugiat, repellat ipsam tempora ad voluptate reiciendis exercitationem perspiciatis suscipit! Laborum iure quae itaque voluptatibus illo impedit voluptatem in dolorem corporis veritatis tempore saepe voluptate earum culpa ut porro eaque, suscipit magnam reiciendis voluptates? Esse praesentium ratione, obcaecati dolor blanditiis pariatur fugit consectetur tenetur nostrum rem in quae non ea iusto ipsa deserunt nobis odio ex. Nobis consectetur ducimus, illum sint, expedita omnis fugit cupiditate quisquam doloribus obcaecati asperiores delectus numquam, cumque veniam perspiciatis quasi possimus. Non quisquam neque et, soluta reiciendis ducimus error aperiam expedita pariatur repudiandae! Repudiandae iste sint nulla est quis officiis dolor sequi? Rerum velit amet fugit provident illo debitis accusantium voluptatem ratione sed iusto veritatis, aliquam, tenetur consequatur, delectus dolorum harum quia atque quidem placeat deserunt qui at! Sed, nihil amet, error corrupti quas sapiente odio fuga, rerum nesciunt veritatis temporibus aliquam illo? Nobis illum deleniti reiciendis quas. Sunt odio mollitia, praesentium dolorem facilis eaque optio ratione nemo saepe vitae enim harum maxime vero doloremque sint ut asperiores sapiente minus odit deleniti iure. Repellendus dignissimos minima debitis odit autem necessitatibus! Mollitia animi, illum quaerat atque doloribus placeat perspiciatis non rerum laboriosam tenetur! Est deleniti rerum, dolorum illum reiciendis corrupti repellendus dicta molestias quia unde beatae rem fuga quibusdam totam? Iste ea facilis dolore labore. Illum, ipsam quis deleniti beatae sint saepe a iste non fuga nam ullam animi nostrum eaque asperiores numquam et provident explicabo consequuntur quia, exercitationem expedita aliquam. Ratione modi aliquam harum, explicabo necessitatibus autem numquam voluptas saepe cupiditate sapiente. Atque voluptatum, perferendis veritatis reprehenderit, expedita vel inventore sed eos eum dolorem iure necessitatibus quam facilis vero praesentium odio velit ab est. Maiores atque odit veritatis temporibus voluptatum unde minus reprehenderit, assumenda quia labore modi repellendus enim placeat, nostrum possimus eius. Doloremque esse perspiciatis itaque excepturi exercitationem veniam eaque suscipit libero minima reprehenderit corrupti tenetur atque architecto placeat corporis voluptatem, odit possimus id nemo a velit provident similique! Fuga quasi iste eius commodi hic iusto non consequuntur cum dolorem. Incidunt debitis laudantium, harum et magni, quia omnis, sapiente sunt facilis iure recusandae. Provident recusandae quis laudantium perspiciatis modi laborum! Voluptas consectetur similique maxime cum doloribus iste! Voluptas, incidunt facere aliquid sunt odio animi soluta, cumque exercitationem est aperiam quibusdam quis.</p>

      <Slider {...settings}>
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
  )
}

export default About