import React, { Component } from 'react'
import './Certificate.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Cert1 from '../../asset/images/sert-1.png';
import Cert2 from '../../asset/images/sert-2.png';
import Cert3 from '../../asset/images/sert-3.png';
import Cert4 from '../../asset/images/sert-4.png';
import Cert5 from '../../asset/images/sert-5.png';

export class Certificate extends Component {
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
      <div id='certificate'>
        <h1>Качество продукции подтверждают <span>сертификаты</span> </h1>
        <div className='carts'>
        <Slider {...settings}>
          <div>
            <img src={Cert1} alt="" />
          </div>
          <div>
            <img src={Cert2} alt="" />
          </div>
          <div>
            <img src={Cert3} alt="" />
          </div>
          <div>
            <img src={Cert4} alt="" />
          </div>
          <div>
            <img src={Cert5} alt="" />
          </div>
        </Slider>
        </div>
      </div>
    )
  }
}

export default Certificate