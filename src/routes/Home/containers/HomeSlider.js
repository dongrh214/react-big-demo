import { connect } from 'react-redux'
import { actions } from '../modules/home'

import HomeSlider from '../components/HomeSlider'



const mapDispatchToProps = {
  increment : () => actions.increment(1),
  doubleAsync: actions.doubleAsync,
  createRequest: actions.createRequest

};
const getMapState = (state, name) => {
  console.log('state:',state);
  return state[name]
};

const mapStateToProps = (state) => ({
  homeData : getMapState(state, 'homeData')
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSlider)
