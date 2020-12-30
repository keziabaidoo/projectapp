import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import NavigationContainer from './src/navigation/NavigationContainer'

 function App(){
  

    return (
      <Provider store={store}>
        <NavigationContainer/>
        </Provider>
    );
  }



export default App;