import CoreLayout from '../layouts/PageLayout/PageLayout'
import HomeRoute from './Home'
import CounterRoute from './Counter'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : HomeRoute(store),
  childRoutes : [
    CounterRoute(store)
  ]
});

export default createRoutes
