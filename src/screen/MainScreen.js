import React, {Component} from 'react';
import {View, Text, ListView, ScrollView, Button, TouchableOpacity, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 50,
        height: 50,
    },
});

/**
 * ListView
 */
class List extends Component {

    constructor(props) {
        super(props);
        // 初始化模拟数据
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            dataSource: dataSource.cloneWithRows([
                {
                    name: '陶宏飞',
                    desc: '无力滔滔'
                }, {
                    name: '周志忠',
                    desc: '123'
                }, {
                    name: '舒韵',
                    desc: '3214'
                }, {
                    name: '宋肖俊',
                    desc: '5234'
                }, {
                    name: '杨念一',
                    desc: '3568'
                }
            ])
        };
    }

    renderRow = (item, index) => {

        let pic = {
            uri: "https://i1.hoopchina.com.cn/blogfile/201705/18/BbsImg149509482112629_614x887.jpg?x-oss-process=image/resize,w_800/format,webp"
        };

        return (
            <TouchableOpacity>
                <View style={styles.row}>
                    <Image
                        source={pic} style={styles.thumb}/>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={{flex: 1, fontSize: 16, color: 'blue'}}>
                            {item.name}
                        </Text>
                        <Text>
                            {item.desc}
                        </Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={this.renderRow}/>
            </View>
        );
    }
}

class MainScreen extends Component {

    /**
     * 注册过的页面会有这个属性数组
     * 这里的属性会被定义路由时设置的属性覆盖
     */
    static navigationOptions = {
        title: "测试覆盖"
    };

    render() {

        // 将该页与其他页面路由建立起来
        const {navigate} = this.props.navigation;

        return (
            <ScrollView>
                <List/>
                <Button onPress={() => navigate('Profile')} title="跳转"/>
            </ScrollView>
        );
    }
}

export default MainScreen;