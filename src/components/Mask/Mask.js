/**
 * Created by dongruihe on 2017/8/10.
 */
import React from 'react'
import PropTypes from 'prop-types'

import './Mask.less'


import PureComponent from '../PureComponent';


class Mask extends PureComponent {
  constructor(props) {
    super(props);
    // 设置 initial state
    this.state = {

    };
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  componentWillUpdate(nextProps, nextState){
  }

  componentDidUpdate(){
  }
  render() {
    return (
      <div className={ this.props.show ? "mask" : "mask hide" }
           onClick={this.props.onClick}
      ></div>
    );
  }
}

Mask.propTypes = {
};
Mask.defaultProps = {

};


export default Mask
