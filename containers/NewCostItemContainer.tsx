import React from 'react';
import NewCostItem from '../components/NewCostItem';
import {View} from 'react-native';


export default () :JSX.Element => {
  return <NewCostItem freeze={false} saveToStorageAndFreeze={(date: string, type: string, cost: number, detail: string) :void => {
    //TODO:
  }} ></NewCostItem>
}
