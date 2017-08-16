/**
 * Created by dongruihe on 2017/8/10.
 */

import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path : '/detail',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {

      const Detail = require('./container/Detail').default;
      const reducer = require('./modules/detail').default;

      injectReducer(store, { key: 'detailData', reducer });

      cb(null, Detail)

    }, 'detail')
  }
})
