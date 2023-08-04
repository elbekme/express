
import './New.scss';
import React, { Component } from 'react'
import News1 from '../../asset/images/news-1.png';
import News2 from '../../asset/images/news-2.png';
import News3 from '../../asset/images/news-3.png';

export class New extends Component {
  render() {
    return (
      <div id='new'>
        <h1>Новости</h1>
        <div className="news-box">
            <div id='news-1' className="news-boxes news-1">
                <img src={News1} alt="" />
                <p>28.01.2022</p>
                <h1>"ЛеанГрупп" серебряный призер EcoVadis!</h1>
            </div>
            <div className="news-boxes">
                <img src={News2} alt="" />
                <p>21.01.2022</p>
                <h1>"ЛеанГрупп" серебряный призер EcoVadis!</h1>
            </div>
            <div className="news-boxes">
                <img src={News3} alt="" />
                <p>16.12.2021</p>
                <h1>Туба, как вид упаковки</h1>
            </div>
        </div>
        <div>
            <button className='new-btn'>Все новости</button>
        </div>
      </div>
    )
  }
}

export default New