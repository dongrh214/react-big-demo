import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { createRequest } from '../../../actions/request';

//引入子组件
import HomeSlider from '../components/HomeSlider'

import { Button } from 'antd-mobile';




class HomeView extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {
      text:'111'
    };
  }

  componentDidMount(){
    const url = 'https://www.xhqb.com/mallweb-app/wxmall/newIndex';
    this.props.createRequest(url);
    // console.log('this.props:',this.props)
  }

  render() {
    return (
      <div style={{ margin: '0 auto' }} >
        <HomeSlider
          homeData = { this.props.homeData }
          createRequest = { this.props.createRequest }
          />
        <Button>Start</Button>
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


const mapDispatchToProps = {
  createRequest: createRequest
};
const getMapState = (state, name) => {
  console.log('state------>:',state);
  if (state[name].result) {
    console.log('state------>:',state[name]);
  }
  return state[name]
};

const mapStateToProps = (state) => ({
  homeData : getMapState(state, 'homeData')
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
