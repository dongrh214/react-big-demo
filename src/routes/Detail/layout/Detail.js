/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import '../../../styles/font.css'
import './Good.less'

import Loading from '../../../components/Loading/Loading';
import TopSlider from '../components/TopSlider/TopSlider';
import SaleLabel from '../components/SaleLabel/SaleLabel'
import GoodDetail from '../components/GoodDetail/GoodDetail'

import { List, Tabs, WhiteSpace, Badge } from 'antd-mobile';
const Item = List.Item;
const TabPane = Tabs.TabPane;


function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}


class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {}

  getTopSlider(spfile) {
    if (spfile) {
      return <TopSlider
        spfile={ spfile }
      />
    } else {
      return ''
    }
  }
  getTitleAndColl(title) {
    if (title) {
      return <div className="good-title-collection">
        <div className="title">{ title }</div>
        <div className="ico ico-heart"></div>

      </div>
    } else {
      return ''
    }
  }
  getPriceAndStock(price, stock) {
    if (price) {
      return <div className="price-stock-wrap">
        <div className="price">¥<label>{ price }</label></div>
        <div className="stock">剩：{ stock }</div>
      </div>
    } else {
      return ''
    }
  }
  getSaleContent(saleContent) {
    if (saleContent) {
      return <div className="sale-content">
        { saleContent }
      </div>
    } else {
      return ''
    }
  }

  getSaleLabel(saleLabel) {
    if (saleLabel) {
      return <SaleLabel
        saleLabel = { saleLabel }
      />
    } else {

    }
  }
  getGoodDetail(detail) {
    if (detail){
      return <GoodDetail />
    } else {
      return ''
    }
  }



  render() {
    const { spfile, goods} = this.props.mainCategory;
    console.log('spfile:',spfile)
    console.log('goods:',goods)
    return <div>
      {/*顶部轮播图*/}
      { this.getTopSlider(spfile)}
      {/*标题及收藏*/}
      { goods && this.getTitleAndColl(goods.title)}
      {/*价格和剩余库存*/}
      { goods && this.getPriceAndStock(110,33) }
      {/*销售标签*/}
      { goods && this.getSaleContent(goods.saleContent)}
      {/*商品标签*/}
      { goods && this.getSaleLabel(goods.saleLabel) }
      <List className="my-list">
        <Item arrow="horizontal" onClick={() => {}}>已选：都颠三倒四的</Item>
        <Item arrow="horizontal" onClick={() => {}}>商品详情</Item>
      </List>
      {/*商品属性查看*/}
      { goods && this.getGoodDetail('ss') }
    </div>
  }
}
Layout.propTypes = {
};
Layout.defaultProps = {
};



export default Layout;

