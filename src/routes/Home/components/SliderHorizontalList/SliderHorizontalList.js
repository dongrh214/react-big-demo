/**
 * Created by dongruihe on 2017/8/10.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './SliderHorizontalList.less'


import PureComponent from '../../../../components/PureComponent';
import GoodItem from '../../../../components/GoodItem/GoodItem'


class SliderHorizontalList extends PureComponent {
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
        <div className="slider-horizontal-wrap">
          {
            this.props.goods.map(item => {
              return  <GoodItem
                key={ item.ids }
                img_url = { item.cdn_source_url || item.cdnSourceUrl }
                title = { item.title }
                price = { item.price }
              />
            })
          }
        </div>
    );
  }
}

SliderHorizontalList.propTypes = {
  goods: PropTypes.array.isRequired,
};
SliderHorizontalList.defaultProps = {
  goods: [],
};


export default SliderHorizontalList
