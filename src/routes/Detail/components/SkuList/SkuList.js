/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import './SkuList.less'
import Mask from '../../../../components/Mask/Mask'
import { toggleGoodsOptionSkuList } from '../../modules/detail'
import PureComponent from '../../../../components/PureComponent'

class SkuList extends PureComponent {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {}

  hideGoodsOptionSkuList(){
    const { toggleGoodsOptionSkuList, dispatch } = this.props;
    toggleGoodsOptionSkuList(dispatch);
  }

  selectedGoodSku(row,attrValIds,event){
    const { selectedGoodSkuInfo, goodsSkuList, selectedGoodSku, dispatch } = this.props;
    event.preventDefault();
    //组装skuOptionIds
    const skuOptionIds = selectedGoodSkuInfo.skuOptionIds;
    let  skuOptionIdsArr = skuOptionIds.split(',');
    skuOptionIdsArr[row] = attrValIds;
    const temSkuOptionIds = skuOptionIdsArr.toString();
    let index = 0;
    goodsSkuList.map((goodsSku, goodsSkuIndex) => {
      if (goodsSku.skuOptionIds === temSkuOptionIds) {
        index = goodsSkuIndex;
      }
    });
    selectedGoodSku(dispatch,index);
  }

  getSkuOption(goodsAttr, goodsOptionSkuList, skuOptionIds, goodsSkuList, row){
    let skuOptionArr = [];
    //被选中的按钮ids
    let skuOptionIdsArr = skuOptionIds.split(',');
    //被选中的 SkuIds
    const selectedSkuIds = skuOptionIdsArr[row];

    goodsOptionSkuList.map((goodsOptionSku,index) => {
      let count = 0;
      if (goodsOptionSku.attrIds === goodsAttr.ids) {
        //替换skuOptionIdsArr第index个属性的attrIds
        skuOptionIdsArr[row] = goodsOptionSku.attrValIds;
        //重新组装optionIds
        const temSkuOptionIds = skuOptionIdsArr.toString();
        // console.log(temSkuOptionIds)
        goodsSkuList.map((goodsSku, goodsSkuIndex) => {
          if (goodsSku.skuOptionIds === temSkuOptionIds) {
            count += 1;
          }
        });
        const attrValIds = goodsOptionSku.attrValIds;
        skuOptionArr.push(
          <a
              href="javasrcipt:;"
              className={ selectedSkuIds===attrValIds ? 'btn-cur' : (count > 0 ? 'btn-normal' : 'btn-disabled') }
              key={goodsOptionSku.ids}
              onClick={ count > 0 && this.selectedGoodSku.bind(this,row,attrValIds)}
          >{goodsOptionSku.attrName}</a>
        )
      }
    });
    return skuOptionArr
  }

  getSkuListItem(){
    const { goodsAttrList, goodsOptionSkuList, goodsSkuList, selectedGoodSkuInfo } = this.props;
    const skuOptionIds = selectedGoodSkuInfo.skuOptionIds;
    let skuListItemArr = [];
    if (!skuOptionIds){
      return skuListItemArr;
    }
    let _this = this;
    goodsAttrList.map((goodsAttr,row) => {
      //确定选中的
      skuListItemArr.push(
        <div className="sku-list-item" key={goodsAttr.ids}>
          <div className="sku-list-item-left">{ goodsAttr.commom }</div>
          <div className="sku-list-item-right">
            { _this.getSkuOption(goodsAttr, goodsOptionSkuList, skuOptionIds, goodsSkuList, row)}
          </div>
        </div>
      )
    });
    return skuListItemArr
  }

  getPlusMinusBox(){
    return <div className="goods-num">
      <div className="goods-num-tips">数量</div>
      <div className="plus-minus-number-box">
        <div className="minus">-</div>
        <div className="number-value">1</div>
        <div className="plus">+</div>
      </div>
    </div>
  }


  render() {
    const { showGoodsSkuOptionList, goodsOptionSkuList, selectedGoodSkuInfo } = this.props;

    return <div>
        <Mask
          show={showGoodsSkuOptionList}
          onClick={this.hideGoodsOptionSkuList.bind(this)}
        />
        <div className={ showGoodsSkuOptionList ? "sku-list show" : "sku-list" } >
          <div className="sku-list-head">
            <div className="sku-list-img-wrap">
              <img src={ goodsOptionSkuList[0].picUrl } alt="wwww"/>
            </div>
            <div className="sku-list-head-text">
              <p className="head-title">{selectedGoodSkuInfo.skuOptionNames}</p>
              <p className="head-price">¥{selectedGoodSkuInfo.skuSalePrice}</p>
            </div>
          </div>
          <div className="sku-list-wrap">
            { this.getSkuListItem() }
          </div>
          { this.getPlusMinusBox() }

          <a href="javascript:;" className="xhsc-whole-btn">立即购买</a>
        </div>
    </div>
  }
}
SkuList.propTypes = {
};
SkuList.defaultProps = {
};



export default SkuList;

