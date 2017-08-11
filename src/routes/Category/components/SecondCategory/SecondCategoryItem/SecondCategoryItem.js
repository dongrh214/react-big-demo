/**
 * Created by dongruihe on 2017/8/10.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import './SecondCategoryItem.less'

class SecondCategoryItem extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {

  }

  render() {

    const { logo, name  } = this.props;

    return <div className="second-category-item">
        <div>
          <img src={ logo } alt="商品图片 "/>
        </div>
        <p>{ name }</p>
      </div>
  }
}
SecondCategoryItem.propTypes = {
  ids: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
SecondCategoryItem.defaultProps = {
  ids:'',
  logo:'',
  name:''
};

export default SecondCategoryItem


