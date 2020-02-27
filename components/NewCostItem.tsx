import React,{useState} from 'react';
import {View, Text, Button} from 'react-native';
import {dateNow} from '../db/async';

interface Props{
  saveToStorageAndFreeze: (date: string, type: string, cost: number, detail: string) => void;
  freeze: boolean;
}

export default function NewCostItem({saveToStorageAndFreeze, freeze} : Props) : JSX.Element{
  const [type, setType] = useState('food')
  const [cost, setCost] = useState(0)
  const [detail, setDetail] = useState('')

  return <View>
    <Button title="Back" onPress={() => {
      console.log('back')
    }}></Button>
    <View>
      <View>
        <Text>选择消费种类</Text>
        <Text>食物</Text>
        <Text>衣物</Text>
        <Text>娱乐</Text>
      </View>
    </View>
    <View>
      <Text>输入金额: 18円</Text>
    </View>
    <View>
      <Text>输入详情: 方便面</Text>
    </View>
    <Button title="确认" onPress={() => {
      saveToStorageAndFreeze(dateNow(), type, cost, detail);
    }}></Button>
  </View>
}