
import './Footer.scss';
import React, { Component } from 'react'
import Logo from '../../asset/images/logo 2.png';
import Logo2 from '../../asset/images/social (1).png';
export class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="footer-item">
            <div className="footer-top">
                <img  src={Logo} alt="" />
                <img src={Logo2} alt="" />
            </div>
            <hr />
            <div className="footer-links">
                <div className="links-left">
                        <ul>
                            <li>
                                <h1>Продукция</h1>
                            </li>
                            <li>
                                <a href="">Ламинатные тубы</a>
                            </li>
                            <li>
                                <a href="">Экструзионные тубы</a>
                            </li>
                            <li>
                                <a href="">Другая упаковка</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h1>Компания</h1>
                            </li>
                            <li>
                                <a href="">О нас</a>
                            </li>
                            <li>
                                <a href="">Наша команда</a>
                            </li>
                            <li>
                                <a href="">Сертификаты</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h1>Разделы</h1>
                            </li>
                            <li>
                                <a href="">Контакты</a>
                            </li>
                            <li>
                                <a href="">Новости</a>
                            </li>
                            <li>
                                <a href="">Вакансии</a>
                            </li>
                        </ul>
                </div>
                <div className="links-right">
                    <ul>
                        <li>
                            <h1>Беларусь</h1>
                        </li>
                        <li>
                            <a href="">+375 (17) 270 53 77</a>
                        </li>
                        <li>
                            <a href="">+375 (17) 270 53 78</a>
                        </li>
                        <li>
                            <h1 className='links-h'>Москва</h1>
                        </li>
                        <li>
                            <a href="">+7 (495) 280 73 44</a>
                        </li>
                        <li>
                            <a href="">+7 (495) 280 73 44</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h1>Беларусь</h1>
                        </li>
                        <li>
                            <a href="">+48 73 1111 044</a>
                        </li>
                        <li>
                            <h1 className='links-h'>Екатеринбург</h1>
                        </li>
                        <li>
                            <a href="">+7 (343) 346 82 06</a>
                        </li>
                    </ul>
                </div>
            </div>
            <p>© 2022 Leangroup. All Rights Reserved.
                Разработка и продвижение сайтов SkyWeb.by</p>
        </div>
      </footer>
    )
  }
}

export default Footer