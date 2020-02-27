import React from 'react';
import { Button, Text, View } from 'react-native';

export interface TodayCostItem{
  type: string;
  cost: number;
  detail: string;
}

export interface Props{
  todayCostItems: Array<TodayCostItem>;
  navigateTo: (targetName: string)  => void;
}

function renderItems(todayCostItems: Array<TodayCostItem>){
  return todayCostItems.map((item, index) => {
    const {type, cost, detail} = item;
    return <Text key={index}>Cost: {cost}円, type: {type}({detail})</Text>
  })
}

export default ({todayCostItems, navigateTo} : Props) : JSX.Element => {
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
      navigateTo('NewCostItem');
    }}></Button>
  </View>)
}