/**
 * ES6 - ES2015 Javascript语法改进的官方标准，React中内置，无需担心兼容性问题
 * 例如 import from class extends () =>
 *
 * JSX 代码中嵌入结构化的标记
 * 例如 <Text>XXX</Text>
 * source={ js变量或者表达式 }
 *
 * AppRegistry 告诉ReactNative哪一个组件被定义为整个应用的根容器。只会调用一次
 */

import {AppRegistry} from 'react-native';
import App from './src/app';

AppRegistry.registerComponent('demo', () => App);
