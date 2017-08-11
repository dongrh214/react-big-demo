/**
 * Created by dongruihe on 2017/8/10.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './FlashSale.less'


import PureComponent from '../../../../components/PureComponent';

import SliderHorizontalList from '../SliderHorizontalList/SliderHorizontalList'

class FlashSale extends PureComponent {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {

    };
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  componentWillUpdate(nextProps, nextState){
    console.log(this.props.adsData,1234567)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div className="flash-sale">
          <div className="flash-sale-title-wrap">
            <label className="flash-sale-left">限时特惠</label>
            <label className="flash-sale-right">更多<i className="ico ico-double-arrow-right"></i></label>
          </div>
        <SliderHorizontalList actGoods={ this.props.actGoods } />
      </div>
    );
  }
}

FlashSale.propTypes = {
  actGoods: PropTypes.array.isRequired,
};
FlashSale.defaultProps = {
  actGoods: [],
};


export default FlashSale
