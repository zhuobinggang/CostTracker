import React from 'react';
import NewCostItem from '../components/NewCostItem';
import {View} from 'react-native';

interface Props {
  navigateTo: (name: string) => void
}


export default (props: Props) :JSX.Element => {
  return <NewCostItem navigateTo={props.navigateTo} freeze={false} saveToStorageAndFreeze={(date: string, type: string, cost: number, detail: string) :void => {
    //TODO:
  }} ></NewCostItem>
}
