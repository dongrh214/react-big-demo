/**
 * Created by dongruihe on 2017/8/9.
 */

import React from 'react'
import './ToySymbol.less'
import '../../../../styles/font.css'


class TopSymbol extends React.Component {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {};
  }

  shouldComponentUpdate(){
    //没有state与props，禁止更新组件
    return false
  }

  render() {
    return (
      <div className="flex-row space-between top-symbol-wrap">
        <div className="flex-row flex-center">
          <i className="ico ico-circle-plus"></i>
          中信系
        </div>
        <div className="flex-row flex-center">
          <i className="ico ico-circle-just"></i>
          100%正品
        </div>
        <div className="flex-row flex-center">
          <i className="ico ico-circle-yes"></i>
          售后无忧
        </div>
      </div>
    );
  }
}

export default TopSymbol
