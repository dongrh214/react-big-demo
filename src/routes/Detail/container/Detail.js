/**
 * Created by dongruihe on 2017/8/10.
 */

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import { createRequest } from '../../../actions/request';
import { selectedGoodSku, toggleGoodsOptionSkuList } from '../modules/detail'

import Layout  from '../layout/Detail'
import Loading from '../../../components/Loading/Loading';


class Detail extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {
    const _this = this;
    const url = '/mallweb-app/wxmall/goods/goodsDetail?ids=20160912000000000092';
    //
    const { dispatch } = this.props;

    _this.props.createRequest(dispatch, url, {
    },function (resp) {
        if (resp.data && resp.data.goodsSkuList) {
          //发起默认sku选择
          _this.props.selectedGoodSku(dispatch, 0)
        }
    });
  }
  componentDidUpdate() {}

  getGoodDetailComponet(){
    console.log('this.props:',this.props)

    const { goodsDetail, selectedGoodSkuInfo, selectedGoodSku, toggleGoodsOptionSkuList, showGoodsSkuOptionList, dispatch } = this.props;
    if (goodsDetail.goods) {
      return <Layout
        goodsDetail={ goodsDetail }
        selectedGoodSkuInfo={ selectedGoodSkuInfo }
        selectedGoodSku={ selectedGoodSku }
        toggleGoodsOptionSkuList={toggleGoodsOptionSkuList}
        showGoodsSkuOptionList={showGoodsSkuOptionList}
        dispatch={ dispatch }
      />
    } else {
      return <Loading/>
    }
  }

  render() {
    return  <div>{
      this.getGoodDetailComponet()
    }</div>
  }
}
Detail.propTypes = {

};
Detail.defaultProps = {

};

const mapDispatchToProps = (dispatch)=> {
  return {
    createRequest,
    selectedGoodSku,
    toggleGoodsOptionSkuList,
    dispatch
  }
};
const getMapState = (state,content) => {
  let data = {};
  console.log('state:',state);
  if (state["detailData"][content]) {
    //获取数据成功
    data = state["detailData"][content];
  }
  return data;
};

const mapStateToProps = (state) => ({
  goodsDetail : getMapState(state,"data"),
  selectedGoodSkuInfo: getMapState(state,"selectedGoodSkuInfo"),
  showGoodsSkuOptionList: state["detailData"]["showGoodsSkuOptionList"],
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail)

