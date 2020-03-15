import React from 'react';
import TodayCostAnalysis from '../components/TodayCostAnalysis';
import {getAnalysis, totalCost} from '../core/index.js';
import {TodayCostItem} from '../types'
import { connect } from 'react-redux'
import {RootState} from '../store'

const mockTodayCostItems : Array<TodayCostItem> = [{
  type: 'food',
  cost: 35,
  detail: 'Cup noodle',
}, {
  type: 'clothe',
  cost: 135,
  detail: 'Jeans',
}, {
  type: 'food',
  cost: 85,
  detail: 'Bean sprout',
}]

export interface Props{
  todayCostItems?: TodayCostItem[];
  navigation?: any;
}

const mapStateToProps = (state: RootState)=>{
  return {todayCostItems: state.todayCostItems}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(({todayCostItems, navigation} : Props) => {
 todayCostItems = todayCostItems || mockTodayCostItems
 return (<TodayCostAnalysis 
  navigateTo={(routeName) => {
    navigation.navigate(routeName);
  }}
  todayCostItems={todayCostItems}
  percentMap={getAnalysis(todayCostItems)}
  totalCost={totalCost(todayCostItems)}
  ></TodayCostAnalysis>)
})