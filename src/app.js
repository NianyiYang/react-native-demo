import {StackNavigator} from 'react-navigation';
import MainScreen from './screen/MainScreen';
import ProfileScreen from './screen/ProfileScreen';
import AboutScreen from './screen/AboutScreen';

/**
 * React-Navigation 一个半官方的导航组件
 *
 * StackNavigator 屏幕上方的导航，类似toolbar
 * TabNavigator 顾名思义，tab
 * DrawerNavigator 抽屉导航栏
 *
 * 定义在Navigator中的每一个页面都会获得一个 navigation prop
 */

const App = StackNavigator({
    Main: {screen: MainScreen, navigationOptions: {title: '王者荣耀'}},
    Profile: {screen: ProfileScreen, navigationOptions: {title: '个人'}},
    About: {screen: AboutScreen, navigationOptions: {title: '关于'}}
});

export default App;