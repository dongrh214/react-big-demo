/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import './MainCategory.less'

import { List } from 'antd-mobile';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {}

  render() {
    const {firstGoodClassList} = this.props;
    return <List className="main-category">
        {
          firstGoodClassList && firstGoodClassList.map((item, index) => {
            return <div className="main-category-item" key={ item.ids }>
              { item.name }
            </div>
          })
        }
      </List>
  }
}
Layout.propTypes = {
  firstGoodClassList: PropTypes.array.isRequired,
};
Layout.defaultProps = {
  firstGoodClassList: []
};



export default Layout;

