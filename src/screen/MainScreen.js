import React, {Component} from 'react';
import {View, Text, ListView, ScrollView} from 'react-native';

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
                '陶宏飞', '周志忠', '舒韵', '高神恩', '杨念一'
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
    render() {
        return (
            <ScrollView>
                <List/>
            </ScrollView>
        );
    }
}

export default MainScreen;