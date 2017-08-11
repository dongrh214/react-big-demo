import React from 'react'
import PropTypes from 'prop-types'
import Immutable, { is, Map } from 'immutable'
// import Cursor from 'immutable/contrib/cursor'

import PureComponent from '../../../../components/PureComponent';


class HomeSlider extends PureComponent {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      data: Map({
        times: 0,
        ads:Map({
          aaa:'bbb'
        })
      })
    };
    // ES6 类中函数必须手动绑定
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log('12');
    let ads = this.state.data.get('ads');
    ads = ads.update('aaa',v => 'ccc');
    let data = this.state.data;
    data = data.update('times', v => 12);
    data = data.update('ads',v => ads);
    this.setState({
      data: data
    });
    // 这时的 times 并不会改变
    console.log('this.state.data.time:',this.state.data.get('times'));
    console.log('this.state.data.time:',this.state.data.get('ads').get('aaa'));

    // this.setState(({data}) => ({
    //     data: data.update('times', v => v + 1) })
    // });
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  componentWillUpdate(nextProps, nextState){
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div style={{ margin: '0 auto' }} >
        <div className="test-ant-design-style">homeData: {this.props.homeData.result}</div>
        <div onClick={ this.handleChange }>text: { this.state.data.get('times') } ==== { this.state.data.get('ads').get('aaa') }</div>
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
