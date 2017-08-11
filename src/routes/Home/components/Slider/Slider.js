import React from 'react'
import PropTypes from 'prop-types'

import './Slider.less'

import { Carousel } from 'antd-mobile';


import PureComponent from '../../../../components/PureComponent';


class Slider extends PureComponent {
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
           {this.props.adsData.map(item => (
             <a href={ item.url } key={item.ids} style={hProp}>
               <img
                 src={ item.filepath }
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
  adsData: PropTypes.array.isRequired,
};
Slider.defaultProps = {
  adsData: [],
};


export default Slider
