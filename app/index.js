import React, { Component } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux/native';

import rootReducer from './ducks';
import Application from './app';

const store = createStore(rootReducer);

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Application />}
      </Provider>
    );
  }
}
