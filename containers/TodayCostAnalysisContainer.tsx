import React,{useEffect, useState} from 'react';
import TodayCostAnalysis from '../components/TodayCostAnalysis';
import {getAnalysis, totalCost} from '../core/index.js';
import {TodayCostItem, TYPES} from '../types'
import { connect } from 'react-redux'
import {RootState} from '../store'
import {readAllCostToday} from '../core/db'
import actions from '../store/actions'

export interface Props{
  todayCostItems?: TodayCostItem[];
  navigation?: any;
  todayCostItemsGot: (items: TodayCostItem[]) => void;
  changeDateToday: (offset: number) => void;
  getCostItemsToday: () => void;
}

const mapStateToProps = (state: RootState)=>{
  return {todayCostItems: state.todayCostItems}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getCostItemsToday: () =>{
      actions.getCostItemsInDate(new Date(), dispatch);
    },
    changeDateToday: (offset: number) => {
      const date = new Date();
      date.setDate(date.getDate() + offset);
      actions.getCostItemsInDate(date, dispatch);
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(({todayCostItems, navigation, getCostItemsToday, changeDateToday} : Props) => {
  const [todayOffset, setTodayOffset] = useState(0);
  useEffect(() => {
    getCostItemsToday();
  },[])
 todayCostItems = todayCostItems || []
 return (<TodayCostAnalysis 
  changeDateToday={(offset) => {
    setTodayOffset(todayOffset + offset);
    changeDateToday(todayOffset + offset);
  }}
  navigateTo={(routeName) => {
    navigation.navigate(routeName);
  }}
  todayCostItems={todayCostItems}
  percentMap={getAnalysis(todayCostItems)}
  totalCost={totalCost(todayCostItems)}
  ></TodayCostAnalysis>)
})