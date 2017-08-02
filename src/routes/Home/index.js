import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path : '',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {

      const HomeSlider = require('./containers/HomeSlider').default;
      const reducer = require('./modules/home').default;

      injectReducer(store, { key: 'homeData', reducer });

      cb(null, HomeSlider)

    }, 'home')
  }
})
