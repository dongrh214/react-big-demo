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
      selecedIndex:0
    }
  }

  componentDidMount() {}

  render() {
    const {firstGoodClassList} = this.props;

    const style = {
      color: '#f6ab00'
    };
    return <List className="main-category">
        {
          firstGoodClassList && firstGoodClassList.map((item, index) => {
            return <div className="main-category-item" style={ this.setState.selecedIndex === index ? style : {} } key={ item.ids }>
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

