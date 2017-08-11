/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import './Layout.less'
import MainCategory from '../components/MainCategory/MainCategory'
import SecondCategory from '../components/SecondCategory/SecondCategory';

import Loading from '../../../components/Loading/Loading';



import { List } from 'antd-mobile';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {}

  getMainCategory(props) {
    if (props.length > 0) {
      return <MainCategory
        firstGoodClassList={ props }
      />
    } else {
      return ''
    }
  }

  getSecondCategory(props) {
    if (props.length > 0) {
      return <SecondCategory
        secondGoodClassList={ props }
      />
    } else {
      return <Loading />
    }
  }

  render() {
    const height = window.innerHeight;

    const { firstGoodClassList } = this.props;
    const { secondGoodClassList } = this.props;

    return <div className="category-wrap" style={{ height: height }}>
      { this.getMainCategory(firstGoodClassList) }
      { this.getSecondCategory(secondGoodClassList) }
    </div>
  }
}
Layout.propTypes = {
  firstGoodClassList: PropTypes.array.isRequired,
  secondGoodClassList: PropTypes.array.isRequired
};
Layout.defaultProps = {
  firstGoodClassList:[],
  secondGoodClassList: []
};



export default Layout;

