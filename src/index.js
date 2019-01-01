import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Pages from './Pages'
import * as serviceWorker from './serviceWorker'
import { HashRouter } from 'react-router-dom'

ReactDOM.render(
  <HashRouter>
    <Pages />
  </HashRouter>
, document.getElementById('root'));

serviceWorker.unregister();
