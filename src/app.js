import {DrawerNavigator} from 'react-navigation';
import MainScreen from './screen/MainScreen';
import ProfileScreen from './screen/ProfileScreen';
import AboutScreen from './screen/AboutScreen';

const App = DrawerNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
    About: {screen: AboutScreen}
});

export default App;