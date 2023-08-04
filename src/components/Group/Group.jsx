import React, { Component } from 'react'
import './Group.scss';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import Person1 from '../../asset/images/person-1.png';
import Person2 from '../../asset/images/person-2.png';
import Person3 from '../../asset/images/person-3.png';
import Person4 from '../../asset/images/person-4.png';
import Person5 from '../../asset/images/person-5.png';

export class Group extends Component {
  render() {
    return (
      <div id='group'>
            <h1>Наша <span>команда</span> </h1>

        <div className='grp-card'>
            <div className="grpp">
                <img src={Person1} alt="" />
                <h1>Войнич Дарья</h1>
                <p>Заместитель директора по продажам</p>
                <h4>+375 (17) 270-53-77 (317)</h4>
            </div>
            <div className="grpp">
                <img src={Person2} alt="" />
                <h1>Мисько Екатерина</h1>
                <p>Начальник отдела сопровождения</p>
                <h4>+375 (17) 270-53-77 (115) +375 29 112-73-48</h4>
                <h4>k.melnichenko@leangroup.by</h4>
            </div>
            <div className="grpp">
                <img src={Person3} alt="" />
                <h1>Дмитроченко Дмитрий</h1>
                <p>Начальник отдела допечатной подготовки</p>
                <h4>+375 (17) 270-53-77 (333) <br /><br />
                    +375 29 360-32-26 <br /><br />
                    dmitrochenko@leangroup.by</h4>
            </div>
            <div className="grpp">
                <img src={Person4} alt="" />
                <h1>Антух Евгений</h1>
                <p>Начальник отдела снабжения</p>
                <h4>+375 (17) 270-53-77 (148) <br /><br />
                    +375 44 764-16-28 <br /><br />
                    j.antuh@leangroup.by</h4>
            </div>
            <div className="grpp">
                <img src={Person5} alt="" />
                <h1>Мисник Елена</h1>
                <p>Специалист по работе с клиентами</p>
                <h4>+375 (17) 270-53-77 (322) <br /><br />
                        +375 29 329-34-03 <br /><br />
                        e.misnik@leangroup.by</h4>
            </div>
        </div>

            <div>
                <button className='grp-btn'>
                Наша команда
                </button>
            </div>
      </div>
    )
  }
}

export default Group