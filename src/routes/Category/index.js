/**
 * Created by dongruihe on 2017/8/10.
 */

import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path : '/category',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {

      const Category = require('./container/Category').default;
      const reducer = require('./modules/category').default;

      injectReducer(store, { key: 'categoryData', reducer });

      cb(null, Category)

    }, 'category')
  }
})
