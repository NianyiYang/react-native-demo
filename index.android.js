/**
 * ES6 - ES2015 Javascript语法改进的官方标准，React中内置，无需担心兼容性问题
 * 例如 import from class extends () =>
 *
 * JSX 代码中嵌入结构化的标记
 * 例如 <Text>XXX</Text>
 *
 * AppRegistry 告诉ReactNative哪一个组件被定义为整个应用的根容器。只会调用一次
 */

import React, {Component} from 'react';
import {AppRegistry, Text} from 'react-native';

class demo extends Component {
    render() {
        return (
            <Text>你好，世界</Text>
        );
    }
}

AppRegistry.registerComponent('demo', () => demo);
