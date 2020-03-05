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
    path: 'PhotoFeed'
  }
 });
 //exporting stack
const Routing = createAppContainer(MainApp);
export default Routing;
