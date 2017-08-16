/**
 * Created by dongruihe on 2017/8/11.
 */

import React from 'react';
import { PropTypes } from 'prop-types';

import '../../../../styles/font.css'
import './SaleLabel.less'

let allSaleLabel = [{title:'A',text:'全国联保'},{title:'B',text:'卖家包邮'},{title:'C',text:'全球采购'},{title:'D',text:'物流优势'},{title:'E',text:'售后无忧'},{title:'F',text:'正品保证'}];


class SaleLabel extends React.Component {

  constructor(props) {
    super(props);
    this.setState = {

    }
  }

  componentDidMount() {}


  getSaleLabel(saleLabel) {
    if (saleLabel) {
      let saleLabelTextArr = [];
      let temSaleLabelArr = saleLabel && saleLabel.split('|');
      //删除空项目
      temSaleLabelArr = temSaleLabelArr.filter( (item) => {
        return item !==""
      });

      for (let i in allSaleLabel) {
        for (let j in temSaleLabelArr) {
          if (allSaleLabel[i].title === temSaleLabelArr[j]){
            saleLabelTextArr.push(
              <div className="ico-text-wrap" key={ allSaleLabel[i].title} >
                <div className="ico ico-circle-yes"></div>
                <div className="text">{allSaleLabel[i].text}</div>
              </div>
            )
          }
        }
      }
      return saleLabelTextArr;
    } else {
      return ''
    }
  }


  render() {
    const { saleLabel } = this.props;
    return <div className="sale-label-wrap">
      { this.getSaleLabel(saleLabel) }
    </div>
  }
}
SaleLabel.propTypes = {
  saleLabel:PropTypes.string.isRequired
};
SaleLabel.defaultProps = {
  saleLabel:''
};



export default SaleLabel;

