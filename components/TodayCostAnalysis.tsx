import React from 'react';

import { Button, Text, View, StyleSheet } from 'react-native';
import { totalCost } from '../core';
import {TodayCostItem} from '../types/index'
/*import {
  PieChart,
} from "react-native-chart-kit";*/
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';


export type PercentMap = {[name: string]: string};

export interface Props{
  todayCostItems: Array<TodayCostItem>;
  navigateTo: (targetName: string)  => void;
  percentMap: PercentMap;
  totalCost: number;
  changeDateToday: (offset: number) => void;
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

function percentList(percentMap: PercentMap){
  return Object.keys(percentMap).map(key => {
    return {
      type: key,
      percent: percentMap[key],
    }
  })
}

export default ({todayCostItems, navigateTo, percentMap, totalCost, changeDateToday} : Props) : JSX.Element => {
  
  return ( <View>
    <Button title="周支出折线图" onPress={() => {
      navigateTo('WeekCostAnalysis')
    }}></Button>
    <Button title="月支出折线图" onPress={() => {
      navigateTo('MonthlyCostAnalysis')
    }}></Button>
    <View>
      <View>
        <View><Text>左边的饼图</Text></View>
        {viewsFromPercentMap(percentMap)}
        <View>

        <View
        style={[
          StyleSheet.absoluteFill,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <Svg height="50%" width="50%" viewBox="0 0 100 100">
          <Circle
            cx="50"
            cy="50"
            r="45"
            stroke="blue"
            strokeWidth="2.5"
            fill="green"
          />
          <Rect
            x="15"
            y="15"
            width="70"
            height="70"
            stroke="red"
            strokeWidth="2"
            fill="yellow"
          />
        </Svg>
      </View>

        </View>
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
      <Button title="上一天" onPress={() => {changeDateToday(-1)}}></Button>
      <Button title="下一天" onPress={() => {changeDateToday(1)}}></Button>
    </View>
    <View>
      <Button title="新增支出" onPress={() => {
        console.log('新增支出')
        navigateTo('NewCostItem');
      }}></Button>
    </View>
  </View>)
}