import React, { Component } from 'react'
import './Backtop.scss';
import BacktopLogo from '../../asset/images/backtop.png';

export class Backtop extends Component {
    backTop = () => {
        window.scrollTo({
          top: 0,
          left: 0,
        });
      };
  render() {
    return (
      <div className='top'>
        <img onClick={this.backTop} className='back' src={BacktopLogo} alt="" />
      </div>
    )
  }
}

export default Backtop