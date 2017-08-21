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

import { List, Tabs } from 'antd-mobile';
const Item = List.Item;

const iScroll = require('iscroll/build/iscroll-probe');
//获取窗口高度
let winHeight = 0;
const options = {
  // 默认iscroll会拦截元素的默认事件处理函数，我们需要响应onClick，因此要配置
  preventDefault: false,
  // 禁止缩放
  zoom: false,
  // 支持鼠标事件，因为我开发是PC鼠标模拟的
  mouseWheel: true,
  // 滚动事件的探测灵敏度，1-3，越高越灵敏，兼容性越好，性能越差
  probeType: 2,
  // 拖拽超过上下界后出现弹射动画效果，用于实现下拉/上拉刷新
  bounce: true,
  // 展示滚动条
  scrollbars: true,
  // CSS转化
  useTransform: true,
  // CSS过渡
  useTransition: true,
};

class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      showDetail:false,
      len:0,
      winHeight:0,
      scrollLen:0,
      maxScrollY:0
    });

    this.getGoodDetail = this.getGoodDetail.bind(this);

    this.scroller = null;

    this.onScrollStart = this.onScrollStart.bind(this);
    this.onScroll = this.onScroll.bind(this);
    this.onScrollEnd = this.onScrollEnd.bind(this);

    this.onTouchEnd = this.onTouchEnd.bind(this);

  }

  onTouchEnd(){
    this.scroller.enable();
    const scrollMaxLen = this.scroller.maxScrollY + this.state.winHeight;
    console.log('=================');
    console.log('his.scroller.directionY:',this.scroller.directionY)
    console.log('this.scroller.y:',this.scroller.y)
    console.log('this.state.maxScrollY:',this.state.maxScrollY)
    console.log('scrollMaxLen:',scrollMaxLen)
    console.log('=================')
    if (this.scroller.y > 100) {
      //超出顶部滑动范围，执行回弹动作
      this.scroller.scrollTo(0, 0, 30, iScroll.utils.ease.bounce);
    } else if (this.scroller.y <= 0 && this.scroller.y >= scrollMaxLen) {
      if (this.scroller.directionY === -1 && this.scroller.y < this.state.maxScrollY+100 && this.scroller.y >= this.state.maxScrollY){
        //往下拉，判断是否讲上部分内容滚动到下面来；
        this.scroller.scrollTo(0, 0, 30, iScroll.utils.ease.bounce);
        //销毁下面详情部分
        this.setState({
          showDetail:false
        });
        //再次重新计算scroller
        let _this = this;
        setTimeout(function () {
          _this.scroller.refresh();
          console.log('是否就能看见男神空间this.scroller:',_this.scroller)
        },500);
      }
      //正常滑动
    } else if (this.scroller.y < scrollMaxLen && this.scroller.y >= scrollMaxLen -100){
      //未超出底部允许下拉范围100，执行回弹动作
      console.log('回弹');
      this.scroller.scrollTo(0, scrollMaxLen, 30, iScroll.utils.ease.bounce);
    } else {
      //拉伸超出允许回弹距离，执行带出详情动作
      //1.向文档插入详情节点
      this.setState({
        showDetail:true
      });
      //2.等待500ms等待详情渲染并滑动上部分滚动区域
      let _this = this;
      setTimeout(function () {
        //重新计算scroller高度
        _this.scroller.refresh();
        _this.scroller.scrollTo(0, _this.state.maxScrollY, 30, iScroll.utils.ease.bounce);
      },500);
    }
  }

  onScrollStart(){
    console.log('onscrollStart:')
  }
  onScroll(){
    const len = this.scroller.y
    if (this.scroller.y > 100) {
      //禁止超过顶部允许滚动返回
      this.scroller.disable();
    }
    console.log("this.scroller.y:",this.scroller.y)
    console.log("this.scroller.maxScrollY + this.state.winHeight:",this.scroller.maxScrollY + this.state.winHeight)
    if (this.scroller.y < this.scroller.maxScrollY + this.state.winHeight - 200){
      //禁止超过底部允许滚动返回
      this.scroller.disable();
    }
    //判断是否在分割部分且为向下拉
    if (this.scroller.directionY === -1 && this.scroller.y < this.state.maxScrollY+80 && this.scroller.y >= this.state.maxScrollY){
      //禁止继续下拉
      this.scroller.disable();
    }
    this.setState({
      len:len
    })
  }

  onScrollEnd(){
    console.log('onScrollEnd');
    this.onTouchEnd();
  }


  getWinHeight(){
    if (window.innerHeight)
      winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight)){
      winHeight = document.body.clientHeight;
    }
  }

  componentDidMount() {
    //获取窗口高度
    this.getWinHeight();
    this.setState({
      winHeight: winHeight
    });
    //初始化iScroll
    this.scroller = new iScroll("#detailWrap", options);
    console.log('scroller:',this.scroller);
    let _this = this;

    setTimeout(function () {
      console.log('=============_this.scroller.maxScrollY:',_this.scroller.maxScrollY)
      _this.setState({
        maxScrollY: _this.scroller.maxScrollY
      });
    },500);

    this.scroller.on('scroll',this.onScroll);
    this.scroller.on('scrollStart',this.onScrollStart);
    this.scroller.on('scrollEnd',this.onScrollEnd);

  }

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
    if (this.state.showDetail && goods){
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
    return <div
      id="detailWrap"
      className="detail-wrap"
      ref="detailWrap"
      style={{height:'0px', width:'100%'}}
      onTouchEnd={ this.onTouchEnd }
    >
      {/*scroll滚动区域*/}
      <div className="scroller">
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
        <div className="pull-up-tips">上拉查看详情</div>
        {/*商品属性查看*/}
        { this.getGoodDetail() }
      </div>
      { this.getSkuList() }
    </div>
  }
}
Layout.propTypes = {
};
Layout.defaultProps = {
};

export default Layout;

