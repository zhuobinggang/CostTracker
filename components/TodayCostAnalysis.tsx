import React from 'react';
import { Button, Text, View } from 'react-native';

interface TodayCostItems{
  type: string;
  cost: number;
  detail: string;
}

function renderItems(todayCostItems: Array<TodayCostItems>){
  return todayCostItems.map((item, index) => {
    const {type, cost, detail} = item;
    return <Text key={index}>Cost: {cost}円, type: {type}({detail})</Text>
  })
}

export default ({todayCostItems}) => {
  return ( <View>
    <Button title="周支出折线图" onPress={() => {
      console.log('dd')
    }}></Button>
    <View>
      <View><Text>左边的饼图</Text></View>
      <View><Text>右边的数据</Text></View>
    </View>
    <View>
      {renderItems(todayCostItems)}
    </View>
    <Button title="新增支出" onPress={() => {
      console.log('新增支出')
    }}></Button>
  </View>)
}