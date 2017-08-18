/**
 * Created by dongruihe on 2017/8/16.
 */
/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import './GoodDetail.less'


import { Tabs } from 'antd-mobile';
const TabPane = Tabs.TabPane;
import PureComponent from '../../../../components/PureComponent'


function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}


class GoodDetail extends PureComponent {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {}

  getParamList(mainList){
    const { goodsOptionParamList} = this.props;
    let paramListArr = [];
    goodsOptionParamList.map((paramList,index) => {
      if (paramList.paramValue && mainList.ids === paramList.parentId) {
        paramListArr.push(
          <li key={paramList.classId + index} className="specification-item-wrap">
            <p className="item-left">{paramList.name}：</p>
            <p className="item-right">{paramList.paramValue}</p>
          </li>
        )
      }

    });
    return paramListArr
  }

  getMainList(){
    const { goodsOptionParamMainLis } = this.props;
    let MainListArr = [];
    let _this = this;
    goodsOptionParamMainLis.map((mainList,index) => {
      MainListArr.push(
        <div key={mainList.ids} className="specifications">
          <p className="specifications-title">{mainList.name}</p>
          <ul className="specifications-contents">
            { _this.getParamList(mainList) }
          </ul>
        </div>
      )
    });
    return MainListArr
  }

  getGoodsinventoryList(){
    const { goodsinventoryList } = this.props;
    let inventoryListArr = [];
    goodsinventoryList.map((goodsinventory,index) => {
        inventoryListArr.push(
            <li key={index} className="inventory-item">{goodsinventory.name}</li>
        )
    });
    return inventoryListArr;
  }

  render() {
    const { goods } = this.props;
    return <Tabs defaultActiveKey="1" animated={false} onChange={callback} onTabClick={handleTabClick}>
      <TabPane tab={ <label>商品介绍</label>} key="1">
          <div dangerouslySetInnerHTML={{__html: goods.content}}>
          </div>
        </TabPane>
        <TabPane tab={<label>规格参数</label>} key="2">
          {this.getMainList()}
        </TabPane>
        <TabPane tab={<label>包装售后</label>} key="3">
          <p className="inventory-title">包装售后</p>
          <ul className="inventory-wrap">
            { this.getGoodsinventoryList() }
          </ul>

        </TabPane>
      </Tabs>
  }
}
GoodDetail.propTypes = {
};
GoodDetail.defaultProps = {
};



export default GoodDetail;

