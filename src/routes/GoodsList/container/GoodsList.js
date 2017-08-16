/**
 * Created by dongruihe on 2017/8/10.
 */

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchData, createRequest } from '../../../actions/request';

import Layout  from '../layout/GoodsList'

class GoodsList extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {

    const url = 'https://www.xhqb.com/mallweb-app/wxmall/goods/goodsDetail?ids=20170414000000000467';
    //
    const { dispatch } = this.props;

    this.props.createRequest(dispatch, url);

    // dispatch(fetchData(url)).then((data) => {
    //   const surl = 'https://www.xhqb.com/mallweb-app/wxmall/secondCategory?mainCategoryIds=20';
    //   dispatch(fetchData(surl)).then(() => {
    //   })
    // });
  }

  render() {
    // const { firstGoodClassList } = this.props.mainCategory;
    // const { secondGoodClassList } = this.props.secondCategory;

    return <Layout
    />
  }
}
GoodsList.propTypes = {

};
GoodsList.defaultProps = {

};

const mapDispatchToProps = (dispatch)=> {
  return {
    createRequest,
    dispatch
  }
};
const getMapState = (state, name) => {
  let data = {};
  return data;
};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList)

