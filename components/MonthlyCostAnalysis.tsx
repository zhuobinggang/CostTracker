import React, {useEffect} from 'react';
import { Button, Text, View } from 'react-native';

function viewsFromMonthlyAnalysis(monthlyAnalysis : any){
  return Object.keys(monthlyAnalysis).map((date, index) => {
    return <View key={index}>
      <Text>{date}: {monthlyAnalysis[date]}</Text>
    </View>
  })
}

interface Props {
  monthlyAnalysis?: any,
  getMonthlyAnalysis?: any
}

export default (props: Props) => {
  useEffect(() => {
    props.getMonthlyAnalysis()
  },[])
  const {monthlyAnalysis = []} = props
  return <View>
    {viewsFromMonthlyAnalysis(monthlyAnalysis)}
  </View>
}