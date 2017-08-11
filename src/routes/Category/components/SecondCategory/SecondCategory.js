/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import './SecondCategory.less'
import SecondCategoryItem from './SecondCategoryItem/SecondCategoryItem'

import { List } from 'antd-mobile';

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {}

  getSecondGoodClassList(props){
    let categoryItems = [];
    if (props.length > 0){
      props.map((item, index) => {
        categoryItems.push(
          <SecondCategoryItem
            key={ item.ids }
            ids={ item.ids }
            logo={ item.logo }
            name={ item.name }
          />
        )
      })
    }
    return categoryItems;
  }

  render() {

    const { secondGoodClassList } = this.props;

    return <div className="second-category-wrap">
        <List className="second-category">
          { this.getSecondGoodClassList(secondGoodClassList) }
        </List>
      </div>

  }
}
Layout.propTypes = {
  secondGoodClassList: PropTypes.array.isRequired
};
Layout.defaultProps = {
  secondGoodClassList: []
};

export default Layout;

