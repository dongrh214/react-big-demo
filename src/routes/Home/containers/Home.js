import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchData } from '../../../actions/request';

import Layout from '../layout/Layout'

class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    const { dispatch } = this.props;
    const url = 'https://www.xhqb.com/mallweb-app/wxmall/newIndex';
    dispatch(fetchData(url)).then((data) => {
      console.log('获取到首页数据!')
    })
  }

  render() {
    const { homeData  } = this.props;
    return (
      <Layout
        homeData={ homeData }
      />
    );
  }
}

HomeView.propTypes = {
  homeData: PropTypes.object.isRequired,
};
HomeView.defaultProps = {
  homeData: {},
};


const mapDispatchToProps = (dispatch)=> {
  return {
    dispatch
  }
};
const getMapState = (state, name) => {
  let data = {};
  if (state[name].result === "success") {
    //获取数据成功
    data = state[name].data;
  }
  return data;
};

const mapStateToProps = (state) => ({
  homeData : getMapState(state, 'homeData')
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
