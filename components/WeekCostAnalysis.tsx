import React, {useEffect, useState} from 'react';
import { Button, Text, View } from 'react-native';

function viewsFromWeeklyAnalysis(weeklyAnalysis : any){
  return Object.keys(weeklyAnalysis).map((date, index) => {
    return <View key={index}>
      <Text>{date}: {weeklyAnalysis[date]}</Text>
    </View>
  })
}

interface Props {
  weeklyAnalysis: any,
  getWeeklyAnalysis?: any
}

export default (props: Props) => {
  const [dateOffset, setDateOffset] = useState(0);
  useEffect(() => {
    props.getWeeklyAnalysis(dateOffset)
  },[])
  const {weeklyAnalysis} = props
  return <View>
    <View>
      {viewsFromWeeklyAnalysis(weeklyAnalysis)}
    </View>
    <View>
      <Button title="last week" onPress={() => {
        setDateOffset(dateOffset - 7)
        props.getWeeklyAnalysis(dateOffset - 7)
      }}>last week</Button>
      <Button title="next week" onPress={() => {
        setDateOffset(dateOffset + 7)
        props.getWeeklyAnalysis(dateOffset + 7)
      }}>last week</Button>
    </View>
  </View>
}