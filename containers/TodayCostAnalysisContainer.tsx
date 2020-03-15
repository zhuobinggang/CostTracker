import React,{useEffect} from 'react';
import TodayCostAnalysis from '../components/TodayCostAnalysis';
import {getAnalysis, totalCost} from '../core/index.js';
import {TodayCostItem, TYPES} from '../types'
import { connect } from 'react-redux'
import {RootState} from '../store'
import {readAllCostToday} from '../core/db'

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
  todayCostItemsGot: (items: TodayCostItem[]) => void;
}

const mapStateToProps = (state: RootState)=>{
  return {todayCostItems: state.todayCostItems}
}

const mapDispatchToProps = (dispatch: any) => {
  return {todayCostItemsGot: (items: TodayCostItem[]) =>{
    dispatch({
      type: TYPES.TODAY_COST_ITEMS_GOT,
      payload: items,
    })
  }}
}

export default connect(mapStateToProps, mapDispatchToProps)(({todayCostItems, navigation, todayCostItemsGot} : Props) => {
  useEffect(() => {
    readAllCostToday().then(list => {
      todayCostItemsGot(list)
    })
  },[])
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