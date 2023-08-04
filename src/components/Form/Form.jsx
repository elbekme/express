
import React, { Component } from 'react'
import './Form.scss';
import Contact from '../../asset/images/contact (2).png';
import Call from '../../asset/images/call (3).png';

export class Form extends Component {
  render() {
    return (
      <div id='form'>
        <h1>Получить подробную <span>информацию</span> </h1>
        <p>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
        <form>
           <div>
           <div>
                <div>
                    <img src={Contact} alt="" />
                </div>
                    <label htmlFor="Name"></label>
                    <input type="text" name='Name' id='Name' placeholder='Ваше имя' />
            </div>
            <div>
                <div>
                    <img src={Call} alt="" />
                </div>
                    <label htmlFor="Name"></label>
                    <input type="tel" name='Name' id='Name' placeholder='+375 (29) 0000000' />
            </div>
           </div> 
            <textarea name="comment" id="" cols="80" rows="7"></textarea>
        </form>
        <button className='form-btn'>
        Получить информацию
        </button>
      </div>
    )
  }
}

export default Form