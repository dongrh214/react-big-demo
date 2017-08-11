import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { createRequest } from '../../../actions/request';

//引入子组件
import Slider from '../components/Slider/Slider'
import TopSymbol from '../components/TopSymbol/TopSymbol';
import FlashSale from '../components/FlashSale/FlashSale';
import GoodAlbums from '../components/GoodAlbums/GoodAlbums';

import { List } from 'antd-mobile';


class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getSlider = this.getSlider.bind(this);;
  }

  componentDidMount(){
    const url = 'https://www.xhqb.com/mallweb-app/wxmall/newIndex';
    this.props.createRequest(url);
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
          {/*<Item extra={'extra content'} onLongPress={this.handleLongPress}>Title</Item>*/}
        </List>
      </div>
    );
  }
}

HomeView.propTypes = {
  homeData: PropTypes.object.isRequired,
};
HomeView.defaultProps = {
  homeData: {},
};


const mapDispatchToProps = {
  createRequest: createRequest
};
const getMapState = (state, name) => {
  let data = {};
  if (state[name].result === "success") {
    //获取数据成功
    data = state[name].data;
  }
  return data;
};

const mapStateToProps = (state) => ({
  homeData : getMapState(state, 'homeData')
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
