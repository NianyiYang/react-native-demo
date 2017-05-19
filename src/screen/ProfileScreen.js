import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

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

class ProfileScreen extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: "flex-end"}}>
                <Greeting style={styles.bigBlue} name="陶宏飞"/>
                <Greeting name="周志忠"/>
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
    }
});

export default ProfileScreen;