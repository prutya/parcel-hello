import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import Heading from './components/Heading';
import Counter from './components/Counter';
import reducer from './reducers'

const reduxMiddleware = [
  thunk
]

const reduxStore = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...reduxMiddleware))
);

render(
  <Provider store={reduxStore}>
    <div className="app__root">
      <Heading component='h2'>
        {'Hello from parcel!'}
      </Heading>
      <Counter />
    </div>
  </Provider>,
  document.getElementById('app')
);