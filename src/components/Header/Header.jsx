import React, { Component } from 'react'
import './Header.scss';
import HeaderRight from '../../asset/images/social.png';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-left">
            <h5>LEANGROUP - тубы и этикетки</h5>
            <h1>Ламинатные тубы</h1>
            <p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
            <button className='btn btn-header'>Каталог</button>
            <div className='pagination'>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
        <div className="header-right">
            <img src={HeaderRight} alt="" />
        </div>
      </header>
    )
  }
}

export default Header