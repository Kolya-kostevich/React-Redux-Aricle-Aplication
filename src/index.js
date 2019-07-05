import React from 'react'
import {render} from 'react-dom'
import {articles} from './fixtures'
import Root from './components/Root';
import store from './store/index';



render(<Root articles />, document.getElementById('root'))