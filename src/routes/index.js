import CoreLayout from '../layouts/Main/Main'
import HomeRoute from './Home'
import CounterRoute from './Counter'
import CategoryRoute from './Category'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : HomeRoute(store),
  childRoutes : [
    CounterRoute(store),
    CategoryRoute(store)
  ]
});

export default createRoutes
