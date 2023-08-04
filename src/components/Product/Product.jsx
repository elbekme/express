import React, { Component } from 'react';
import './Product.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Pro1 from '../../asset/images/product-1.png';
import Pro2 from '../../asset/images/product-2.png';
import Pro3 from '../../asset/images/product-3.png';
import Pro4 from '../../asset/images/product-4 (2).png';
import Pro5 from '../../asset/images/product-5.png';

export class Product extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 1800,
        autoplaySpeed: 1500,
        cssEase: "linear",
      };
    return (
      <div id='product'>
        <h1>Наша <span>продукция</span> </h1>
        <div className="product-btn">
            <button className='btn '>Ламинатные тубы</button>
            <button className='btn '>Экструзионные тубы</button>
            <button className='btn '>Другая упаковка</button>
        </div>

        <div className='carts'>
        <Slider {...settings}>
          <div>
            <img src={Pro1} alt="" />
          </div>
          <div>
          <img src={Pro2} alt="" />
          </div>
          <div>
          <img src={Pro3} alt="" />
          </div>
          <div>
          <img src={Pro4} alt="" />
          </div>
          <div>
          <img src={Pro5} alt="" />
          </div>
        </Slider>
        </div>
        <div className='pro-last_btn'>
            <button className='pro-btn'>Перейти в каталог</button>
        </div>
      </div>
    )
  }
}

export default Product