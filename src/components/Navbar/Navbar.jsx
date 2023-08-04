import React, { Component } from 'react'
import './Navbar.scss';
import NavLogo from '../../asset/images/logo 2.png';

export class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            darkMode:false,
        };
    }
    App = () => {
        this.setState({
            darkMode: !this.state.darkMode,
        });
        console.log('hi');
    }

  render() {


    return (
      <nav className={this.state.darkMode ? 'dark' : ''}>
        <div  className="navbar-item ">
            <img src={NavLogo} alt="" />
            <ul>
                <li>
                    <a href="#product">Продукция</a>
                </li>
                <li>
                    <a href="#certificate">Сертификаты</a>
                </li>
                <li>
                    <a href="#group">Наша команда</a>
                </li>
                <li>
                    <a href="#footer-item">О нас</a>
                </li>
                <li>
                    <a href="#new">Новости</a>
                </li>
                <li>
                    <a href="#main">Вакансии</a>
                </li>
                <li>
                    <a href="#form">Контакты</a>
                </li>
            </ul>
            <button onClick={this.App} className='dark-btn'>
                Dark / Light
            </button>
        </div>
      </nav>
    )
  }
}

export default Navbar