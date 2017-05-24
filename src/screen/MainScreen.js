import React, {Component} from 'react';
import {View, Text, ListView, ScrollView, Button} from 'react-native';

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
                '陶宏飞', '周志忠', '舒韵', '宋肖俊', '杨念一'
            ])
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ListView dataSource={this.state.dataSource}
                          renderRow={(rowData) => <Text>{rowData}</Text>}/>
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