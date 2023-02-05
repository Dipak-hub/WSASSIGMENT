import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/Splash/SplashScreen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import store from './src/store/store';
import Routes from './src/navigation/Routes';

export default function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'white'} />
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}
