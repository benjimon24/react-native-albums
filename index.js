// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('albums', () => App);
// //
import React from 'react';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'
import { AppRegistry, View } from 'react-native';

const App = () => {
  return (
    // <View style={{flex: 1}}>
    <View>
      <Header headerText={'Albums'}/>
      <AlbumList />
    </View>
  );
};

AppRegistry.registerComponent('albums', () => App);
