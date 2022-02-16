import React from 'react'
import AppContainer from './components/AppContainer';
import { Provider } from 'react-redux'
import store from './redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}