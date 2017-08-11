/**
 * Created by dongruihe on 2017/8/10.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './GoodItem.less'


import PureComponent from '../PureComponent';


class GoodItem extends PureComponent {
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
  }

  componentDidUpdate(){
  }
  render() {
    const { img_url, title, price } = this.props;
    return (
        <div className="good-item">
          <div className="good-item-img">
            <img src={ img_url } alt="商品图片"/>
          </div>
          <p className="good-title">{ title }</p>
          <p className="good-price">价格:<label>¥{ price }</label></p>
        </div>
    );
  }
}

GoodItem.propTypes = {
  img_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
GoodItem.defaultProps = {
  img_url: '',
  title:'',
  price:0
};


export default GoodItem
