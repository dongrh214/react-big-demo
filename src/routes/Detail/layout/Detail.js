/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import '../../../styles/font.css'
import './Good.less'

import TopSlider from '../components/TopSlider/TopSlider';
import SaleLabel from '../components/SaleLabel/SaleLabel'
import GoodDetail from '../components/GoodDetail/GoodDetail'
import SkuList from '../components/SkuList/SkuList'

import { List, Tabs, WhiteSpace, Badge } from 'antd-mobile';
const Item = List.Item;


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
  getGoodDetail() {
    const { goodsDetail } = this.props;
    const { goods, goodsOptionParamMainList, goodsOptionParamList, goodsinventoryList } = goodsDetail;
    if (goods){
      return <GoodDetail
        goods={goods}
        goodsOptionParamMainLis={goodsOptionParamMainList}
        goodsOptionParamList={goodsOptionParamList}
        goodsinventoryList={goodsinventoryList}
      />
    } else {
      return ''
    }
  }
  getSkuList(){
    const { goodsDetail, selectedGoodSkuInfo, selectedGoodSku, toggleGoodsOptionSkuList, showGoodsSkuOptionList, dispatch } = this.props;
    const { goodsSkuList, goodsOptionSkuList, goodsAttrList} = goodsDetail;
    return <SkuList
      selectedGoodSkuInfo={selectedGoodSkuInfo}
      goodsOptionSkuList={goodsOptionSkuList}
      goodsAttrList={goodsAttrList}
      goodsSkuList={goodsSkuList}
      selectedGoodSku={selectedGoodSku}
      toggleGoodsOptionSkuList={toggleGoodsOptionSkuList}
      showGoodsSkuOptionList={showGoodsSkuOptionList}
      dispatch={dispatch}
    />
  }

  chooseGoodsSku(){
    const { toggleGoodsOptionSkuList, dispatch } = this.props;
    toggleGoodsOptionSkuList(dispatch);
  }

  render() {
    const { goodsDetail, selectedGoodSkuInfo } = this.props;
    const { spfile, goods } = goodsDetail;
    return <div>
      {/*顶部轮播图*/}
      { this.getTopSlider(spfile)}
      {/*标题及收藏*/}
      { this.getTitleAndColl(goods.title)}
      {/*价格和剩余库存*/}
      { this.getPriceAndStock(110,33) }
      {/*销售标签*/}
      { this.getSaleContent(goods.saleContent)}
      {/*商品标签*/}
      { this.getSaleLabel(goods.saleLabel) }
      <List className="my-list">
        <Item arrow="horizontal" onClick={() => { this.chooseGoodsSku() }}>已选：{ selectedGoodSkuInfo.skuOptionNames }</Item>
        <Item arrow="horizontal" onClick={() => {}}>商品详情</Item>
      </List>
      {/*商品属性查看*/}
      { this.getGoodDetail() }
      {/*商品属性列表*/}
      { this.getSkuList()}
    </div>
  }
}
Layout.propTypes = {
};
Layout.defaultProps = {
};

export default Layout;

