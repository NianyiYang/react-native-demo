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

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text, Image} from 'react-native';

/**
 * 一个简单的文本组件
 * 组件，可以被其他组件调用
 * props 父组件中指定，指定后生命周期内不会改变
 * state 需要改变状态的数据
 */
class Greeting extends Component {
    render() {
        return (
            <Text style={this.props.style}>Hello {this.props.name}</Text>
        );
    }
}

/**
 * 一个简单的文字闪烁组件
 */
class Blink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };

        setInterval(() => {
            this.setState(previousState => {
                return {
                    showText: !previousState.showText
                };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return (
            <Text>{display}</Text>
        );
    }
}

/**
 * 一个固定宽高的组件
 * 尺寸是逻辑大小，与设备像素密度无关
 */
class AreaView extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={styles.blueFixedRect}/>
                <View style={styles.greenFixedRect}/>
                <View style={styles.blackFixedRect}/>
            </View>
        );
    }
}

/**
 * 一个弹性宽高的组件
 * flex 意义类似 Android 中 LinearLayout 的 weight
 * 父容器如果未定义固定宽高和flex，则子组件肯定不会显示
 *
 * Flex布局
 * flexDirection
 * row 水平
 * column 竖直
 *
 * justifyContent 主轴排列方式
 * flex-start 靠左
 * center 居中
 * flex-end 靠右
 * space-around
 * space-between
 *
 * alignItems 次轴排列方式
 * flex-start 靠左
 * center 居中
 * flex-end 靠右
 * stretch
 */
class FlexView extends Component {
    render() {
        return (
            <View style={{height: 100, width: 300}}>
                <View style={styles.blueFlexRect}/>
                <View style={styles.greenFlexRect}/>
                <View style={styles.blackFlexRect}/>
            </View>
        );
    }
}

/**
 * 应用的根组件
 * View 用作其他组件的容器，控制布局和样式
 */
class demo extends Component {
    render() {

        let pic = {
            uri: "https://i1.hoopchina.com.cn/blogfile/201705/18/BbsImg149509482112629_614x887.jpg?x-oss-process=image/resize,w_800/format,webp"
        };

        return (
            <View style={{alignItems: 'center', justifyContent: "flex-end"}}>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Greeting style={styles.bigBlue} name="陶宏飞"/>
                <Greeting name="周志忠"/>
                <Blink text="无力滔滔"/>
                <Text style={styles.bigBlue}>陶宏飞</Text>
                <Text style={styles.smallRed}>周志忠</Text>
                <AreaView/>
                <FlexView/>
            </View>
        );
    }
}

/**
 * 样式表，首先要import进来
 * 其他写法同html中的css。但是命名是驼峰式
 * 一个组件可以引用多个样式，后面会覆盖前面
 *
 * 另外只有组件中有style这个props才能直接给它设置样式
 */
const styles = StyleSheet.create({
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    },
    smallRed: {
        color: 'red',
        fontSize: 16
    },
    blueFixedRect: {
        width: 50,
        height: 50,
        backgroundColor: 'skyblue'
    },
    greenFixedRect: {
        width: 50,
        height: 100,
        backgroundColor: 'green'
    },
    blackFixedRect: {
        width: 100,
        height: 150,
        backgroundColor: 'black'
    },
    blueFlexRect: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    greenFlexRect: {
        flex: 1,
        backgroundColor: 'green'
    },
    blackFlexRect: {
        flex: 1,
        backgroundColor: 'black'
    }
});

AppRegistry.registerComponent('demo', () => demo);
