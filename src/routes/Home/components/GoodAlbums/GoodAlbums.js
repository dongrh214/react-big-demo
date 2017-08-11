/**
 * Created by dongruihe on 2017/8/10.
 */

import React from 'react'
import PropTypes from 'prop-types'

import './GoodAlbums.less'


import PureComponent from '../../../../components/PureComponent';

import SliderHorizontalList from '../SliderHorizontalList/SliderHorizontalList'

class GoodAlbums extends PureComponent {
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
    const { albumsUrl, goodsinfoModelList } = this.props.goodAlbumData;
    return (
      <div className="album-wrap">
        <div className="album-img">
          <img src={ albumsUrl } />
        </div>

        <SliderHorizontalList goods={ goodsinfoModelList } />
      </div>
    );
  }
}

GoodAlbums.propTypes = {
  goodAlbumData: PropTypes.object.isRequired,
};
GoodAlbums.defaultProps = {
  goodAlbumData: {},
};


export default GoodAlbums
