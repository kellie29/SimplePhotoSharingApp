import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native'
import AppNavigator from './src/routes';
class App extends Component {
  render() {
    const prefix = 'photoapp://'

    return (
       <View style = {styles.container}>
         <AppNavigator 
          uriPrefix={'demo://'}
         />
       </View>
    );
  }
}
export default App;
const styles = StyleSheet.create({
  container:{
    flex:1

  }

})
