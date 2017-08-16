/**
 * Created by dongruihe on 2017/8/10.
 */

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchData, createRequest } from '../../../actions/request';

import Layout  from '../layout/Detail'

class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {

    const url = 'https://www.xhqb.com/mallweb-app/wxmall/goods/goodsDetail?ids=20170414000000000467';
    //
    const { dispatch } = this.props;

    this.props.createRequest(dispatch, url, {
      name:'sssss'
    },11);

    // dispatch(fetchData(url)).then((data) => {
    //   const surl = 'https://www.xhqb.com/mallweb-app/wxmall/secondCategory?mainCategoryIds=20';
    //   dispatch(fetchData(surl)).then(() => {
    //   })
    // });
  }

  render() {
    const { mainCategory } = this.props;

    return <Layout
      mainCategory={ mainCategory }
    />
  }
}
Detail.propTypes = {

};
Detail.defaultProps = {

};

const mapDispatchToProps = (dispatch)=> {
  return {
    // fetchData: fetchData,
    createRequest,
    dispatch
  }
};
const getMapState = (state) => {
  let data = {};
  console.log('state:',state["detailData"])
  if (state["detailData"]["data"] && state["detailData"].result === "success") {
    //获取数据成功
    data = state["detailData"].data;
  }
  return data;
};

const mapStateToProps = (state) => ({
  mainCategory : getMapState(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

