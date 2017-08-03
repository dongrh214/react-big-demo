import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path : '',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {

      const Home = require('./containers/Home').default;
      const reducer = require('./modules/home').default;

      injectReducer(store, { key: 'homeData', reducer });

      cb(null, Home)

    }, 'home')
  }
})
