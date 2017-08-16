/**
 * Created by dongruihe on 2017/8/16.
 */
/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import './GoodDetail.less'


import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
const TabPane = Tabs.TabPane;


function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}


class GoodDetail extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {}

  getGoodDetail(detail) {
    if (detail){

    } else {

    }
  }



  render() {
    return <Tabs defaultActiveKey="2" onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab={ <label>商品介绍</label>} key="1">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15rem', backgroundColor: '#fff' }}>
            Content of First Tab
          </div>
        </TabPane>
        <TabPane tab={<label>规格参数</label>} key="2">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15rem', backgroundColor: '#fff' }}>
            Content of Second Tab
          </div>
        </TabPane>
        <TabPane tab={<label>包装售后</label>} key="3">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15rem', backgroundColor: '#fff' }}>
            Content of Third Tab
          </div>
        </TabPane>
      </Tabs>
  }
}
GoodDetail.propTypes = {
};
GoodDetail.defaultProps = {
};



export default GoodDetail;

