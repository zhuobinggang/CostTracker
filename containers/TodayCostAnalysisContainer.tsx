import React,{useEffect} from 'react';
import TodayCostAnalysis from '../components/TodayCostAnalysis';
import {getAnalysis, totalCost} from '../core/index.js';
import {TodayCostItem, TYPES} from '../types'
import { connect } from 'react-redux'
import {RootState} from '../store'
import {readAllCostToday} from '../core/db'

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
 todayCostItems = todayCostItems || []
 return (<TodayCostAnalysis 
  navigateTo={(routeName) => {
    navigation.navigate(routeName);
  }}
  todayCostItems={todayCostItems}
  percentMap={getAnalysis(todayCostItems)}
  totalCost={totalCost(todayCostItems)}
  ></TodayCostAnalysis>)
})