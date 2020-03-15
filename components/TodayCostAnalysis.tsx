import React from 'react';
import { Button, Text, View } from 'react-native';
import { totalCost } from '../core';
import {TodayCostItem} from '../types/index'

export type PercentMap = {[name: string]: string};

export interface Props{
  todayCostItems: Array<TodayCostItem>;
  navigateTo: (targetName: string)  => void;
  percentMap: PercentMap;
  totalCost: number;
}

function renderItems(todayCostItems: Array<TodayCostItem>){
  return todayCostItems.map((item, index) => {
    const {type, cost, detail} = item;
    return <View key={index}><Text>Cost: {cost}円, type: {type}({detail})</Text></View>
  })
}

function viewsFromPercentMap(percentMap: PercentMap){
  return Object.keys(percentMap).map((key, index) => {
  return <View key={index}><Text>{key}: {percentMap[key]}%</Text></View>
  })
}

export default ({todayCostItems, navigateTo, percentMap, totalCost} : Props) : JSX.Element => {
  return ( <View>
    <Button title="周支出折线图" onPress={() => {
      navigateTo('WeekCostAnalysis')
    }}></Button>
    <View>
      <View>
        <View><Text>左边的饼图</Text></View>
        {viewsFromPercentMap(percentMap)}
      </View>
      <View>
        <Text>右边的数据</Text>
        <Text>Total: {totalCost}</Text>
      </View>
    </View>

    <View style={{height: 16}}></View>
    <View>
      {renderItems(todayCostItems)}
    </View>
    <View>
      <Button title="新增支出" onPress={() => {
        console.log('新增支出')
        navigateTo('NewCostItem');
      }}></Button>
    </View>
  </View>)
}