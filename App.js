import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigation from './src/navigation/Navigation'
import AppContainer from './src/navigation/Navigation';
import authReducer from './src/redux/reducers/authReducer'

const store = createStore(authReducer);


 function App(){
  

    return (
      <Provider store={store}>
        <AppContainer/>
        </Provider>
    );
  }



export default App;