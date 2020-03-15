import React,{useState} from 'react';
import {View, Text, Button, Picker, TextInput} from 'react-native';
import {dateNow} from '../db/async';

interface Props{
  saveToStorageAndFreeze: (date: string, type: string, cost: number, detail: string) => void;
  freeze: boolean;
  navigateTo: (componentName: string) => void;
}

export default function NewCostItem({saveToStorageAndFreeze, freeze, navigateTo} : Props) : JSX.Element{
  const [type, setType] = useState('Clothe')
  const [cost, setCost] = useState('0')
  const [detail, setDetail] = useState('')

  return <View>
    <Button title="Back" onPress={() => {
      console.log('back')
      navigateTo('TodayCostAnalysis')
    }}></Button>
    <View>
      <View>
        <Text>选择消费种类</Text>
        <Picker
          selectedValue={type}
          style={{height: 50, width: 100}}
          onValueChange={setType}>
          <Picker.Item label="食物" value="Food" />
          <Picker.Item label="衣物" value="Clothe" />
          <Picker.Item label="娱乐" value="Amusement" />
        </Picker>
      </View>
    </View>
    <View>
      <Text>输入金额: 18円</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(input) => {
          setCost(input)
        }}
        value={cost}
      />
    </View>
    <View>
      <Text>输入详情: 方便面</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(input) => {
          setDetail(input)
        }}
        value={detail}
      />
    </View>
    <Button title="确认" onPress={() => {
      saveToStorageAndFreeze(dateNow(), type, cost, detail);
    }}></Button>
  </View>
}