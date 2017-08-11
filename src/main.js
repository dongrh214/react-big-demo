import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
import './styles/main.less'

const WIDTH = 750;


// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__);

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root');

const isPC = () => {
  const userAgentInfo = navigator.userAgent;
  const Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};


//根据屏幕宽度重新定义宽度
if (!isPC()) {
  const clientWidth = document.documentElement.clientWidth;
  MOUNT_NODE.style.width = (clientWidth).toString() + 'px';
}


let render = () => {
  const App = require('./components/App').default;
  const routes = require('./routes/index').default(store);

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  )
};

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render;
    const renderError = (error) => {
      const RedBox = require('redbox-react').default;

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    };

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e);
        renderError(e)
      }
    };

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render()
      })
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render();
