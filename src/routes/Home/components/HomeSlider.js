import React from 'react'
import PropTypes from 'prop-types'
import { is } from 'immutable'

class HomeSlider extends React.Component {
  constructor(props) {
    super(props);

    // 设置 initial state
    this.state = {
      text:'111'
    };
    // ES6 类中函数必须手动绑定
    this.handleChange = this.handleChange.bind(this);


  }
  handleChange(event) {
    console.log('12');
    this.setState({
      text: 12
    });
  }

  componentWillMount(){

  }
　
  componentDidMount(){
    console.log('开始网络请求～');
    const url = 'https://www.xhqb.com/mallweb-app/wxmall/newIndex';
    this.props.createRequest(url);

    console.log('this.props:',this.props)
  }

  componentWillReceiveProps(nextProps){

  }

  shouldComponentUpdate(nextProps = {}, nextState = {}){
    const thisProps = this.props || {}, thisState = this.state || {};
    if (Object.keys(thisProps).length !== Object.keys(nextProps).length ||
      Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }

    for (const key in nextProps) {
      if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
        return true;
      }
    }

    for (const key in nextState) {
      if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
        return true;
      }
    }
    return false;
  }

  componentWillUpdate(nextProps, nextState){

  }

  componentDidUpdate(){
      console.log('componentDidUpdate');
  }

  render() {
    return (
       <div style={{ margin: '0 auto' }} >
          <h2>homeData: {this.props.homeData.result}</h2>
          <h2 onClick={ this.handleChange }>text: {this.state.text}</h2>
          <button className='btn btn-primary' onClick={this.props.increment}>
            Increment
          </button>
            {' '}
          <button className='btn btn-secondary' onClick={this.props.doubleAsync}>
            Double (Async)
          </button>
       </div>
    );
  }

}

HomeSlider.propTypes = {
  homeData: PropTypes.object.isRequired,
};
HomeSlider.defaultProps = {
  defaultData: '',
};


export default HomeSlider
