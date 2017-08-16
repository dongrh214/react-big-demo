/**
 * Created by dongruihe on 2017/8/10.
 */

import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path : '/goodsList',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {

      const GoodsList = require('./container/GoodsList').default;
      const reducer = require('./modules/goodsList').default;

      injectReducer(store, { key: 'GoodsListData', reducer });

      cb(null, GoodsList)

    }, 'goodsList')
  }
})
