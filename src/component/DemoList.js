import React, {Component, PropTypes} from 'react';
import {View, Text, ListView, TouchableOpacity, Image, StyleSheet} from 'react-native';

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
class DemoList extends Component {

    constructor(props) {
        super(props);
        // 初始化模拟数据
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.state = {
            data: dataSource.cloneWithRows(props.items)
        };

    }

    renderRow = (item, i) => {

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
    };

    render() {

        console.log(this.state.data);

        return (
            <View style={{flex: 1}}>
                <ListView dataSource={this.state.data}
                          renderRow={this.renderRow}/>
            </View>
        );
    }
}

export default DemoList;