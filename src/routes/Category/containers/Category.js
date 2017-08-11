/**
 * Created by dongruihe on 2017/8/10.
 */

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { fetchData } from '../../../actions/request';

import Layout  from '../layout/Layout'

class Category extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {
    const url = 'https://www.xhqb.com/mallweb-app/wxmall/mainCategory';

    const { dispatch } = this.props;

    dispatch(fetchData(url)).then((data) => {
      const surl = 'https://www.xhqb.com/mallweb-app/wxmall/secondCategory?mainCategoryIds=20';
      dispatch(fetchData(surl)).then(() => {
      })
    });
  }

  render() {
    const { firstGoodClassList } = this.props.mainCategory;
    const { secondGoodClassList } = this.props.secondCategory;

    return <Layout
      firstGoodClassList={ firstGoodClassList }
      secondGoodClassList={ secondGoodClassList }
    />
  }
}
Category.propTypes = {

};
Category.defaultProps = {

};

const mapDispatchToProps = (dispatch)=> {
  return {
    fetchData: fetchData,
    dispatch
  }
};
const getMapState = (state, name) => {
  let data = {};
  if (state["categoryData"][name] && state["categoryData"][name].result === "success") {
    //获取数据成功
    data = state["categoryData"][name].data;
  }
  return data;
};

const mapStateToProps = (state) => ({
  mainCategory : getMapState(state, 'mainCategory'),
  secondCategory: getMapState(state, 'secondCategory'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category)

