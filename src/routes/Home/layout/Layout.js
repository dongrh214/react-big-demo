/**
 * Created by dongruihe on 2017/8/11.
 */
import React from 'react'
import PropTypes from 'prop-types'


//引入子组件
import Slider from '../components/Slider/Slider'
import TopSymbol from '../components/TopSymbol/TopSymbol';
import FlashSale from '../components/FlashSale/FlashSale';
import GoodAlbums from '../components/GoodAlbums/GoodAlbums';

import { List } from 'antd-mobile';


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSlider = this.getSlider.bind(this);;
  }

  componentDidMount(){

  }

  getSlider(props) {
    if (props) {
      return <Slider
        adsData = { props }
      />
    }
    return ''
  }
  getFlashSale(props) {
    if (props) {
      return <FlashSale
        actGoods = { props }
      />
    }
    return ''
  }
  getGoodAlbums(props) {
    let goodAlbumsArray = [];
    if (props){
      props.map( (item, index) => {
        goodAlbumsArray.push(
          <GoodAlbums key={ index } goodAlbumData = { item }/>
        )
      });
    }
    return goodAlbumsArray
  }

  render() {
    const { ads, actGoods, goodAlbums  } = this.props.homeData;
    return (
      <div style={{ margin: '0 auto' }} >
        <List  className="my-list">
          {/*头部宣传图*/}
          <TopSymbol />
          {/*头部轮播图*/}
          { this.getSlider(ads) }
          {/*现实抢购*/}
          { this.getFlashSale(actGoods) }
          {/*专辑列表*/}
          { this.getGoodAlbums(goodAlbums) }
        </List>
      </div>
    );
  }
}

Layout.propTypes = {
  homeData: PropTypes.object.isRequired,
};
Layout.defaultProps = {
  homeData: {},
};




export default Layout;
