/**
 * Created by dongruihe on 2017/8/16.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './TopSlider.less'

import { Carousel } from 'antd-mobile';


import PureComponent from '../../../../components/PureComponent';


class Slider extends PureComponent {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      initialHeight: '7.5rem'
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
    const hProp = this.state.initialHeight ? { height: this.state.initialHeight } : {};
    return (
      <div>
        <Carousel
          dotActiveStyle = { { backgroundColor:'#f6ab00' } }
          dotStyle = { { backgroundColor:'#cccccc' } }
          className="my-carousel"
          autoplay={true}
          infinite
          selectedIndex={0}
          swipeSpeed={35}
          beforeChange={(from, to) => {}}
          afterChange={index => {}}
        >
          {this.props.spfile.map(item => (
            <a key={item.ids} style={hProp}>
              <img
                src={ item.cdnSourceUrl }
                alt="icon"
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  {/*this.setState({*/}
                  {/*initialHeight: null,*/}
                  {/*});*/}
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    );
  }
}

Slider.propTypes = {
  spfile: PropTypes.array.isRequired,
};
Slider.defaultProps = {
  spfile: [],
};


export default Slider
