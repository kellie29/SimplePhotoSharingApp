import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//Screens
import PhotoFeed from '../screens/photoFeed';
//Creating rootstack
 const MainApp = createStackNavigator({
  PhotoFeed : {
    screen: PhotoFeed,
    navigationOptions: {
      headerLayoutPreset:'center'
    },
    path: 'feed/:secondId' //Path when you open as a link from browser with prefix demo://feed/1

  }
 });
 //exporting stack
 export default createAppContainer(MainApp);

