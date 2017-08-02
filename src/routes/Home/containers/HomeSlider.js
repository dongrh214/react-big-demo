import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules/home'

import HomeSlider from '../components/HomeSlider'

const mapDispatchToProps = {
  increment : () => increment(1),
  doubleAsync
};

function aaa(state) {

  return state.homeData;
}
const mapStateToProps = (state) => ({
  homeData : aaa(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSlider)
