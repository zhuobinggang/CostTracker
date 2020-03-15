import React, {useEffect} from 'react';
import { Button, Text, View } from 'react-native';

function viewsFromWeeklyAnalysis(weeklyAnalysis : any){
  return Object.keys(weeklyAnalysis).map((date, index) => {
    return <View key={index}>
      <Text>{date}: {weeklyAnalysis[date]}</Text>
    </View>
  })
}

interface Props {
  weeklyAnalysis?: any,
  getWeeklyAnalysis?: any
}

export default (props: Props) => {
  useEffect(() => {
    props.getWeeklyAnalysis()
  },[])
  const {weeklyAnalysis = []} = props
  return <View>
    {viewsFromWeeklyAnalysis(weeklyAnalysis)}
  </View>
}