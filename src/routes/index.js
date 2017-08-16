import CoreLayout from '../layouts/Main/Main'
import HomeRoute from './Home'
import CounterRoute from './Counter'
import CategoryRoute from './Category'
import DetailRoute from './Detail'
import GoodsListRoute from './GoodsList'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : HomeRoute(store),
  childRoutes : [
    CounterRoute(store),
    CategoryRoute(store),
    DetailRoute(store),
    GoodsListRoute(store)
  ]
});

export default createRoutes
