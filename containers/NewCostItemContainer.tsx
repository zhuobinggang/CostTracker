import React,{useState} from 'react';
import NewCostItem from '../components/NewCostItem';
import {View} from 'react-native';
import {save, readAllCostToday} from '../core/db'
import { TodayCostItem, TYPES } from '../types';
import { connect } from 'react-redux'


interface Props {
  todayCostItemsGot: any;
  navigation?: any;
}

const mapStateToProps = (state: any) => {
  return {}
}

const mapDispatchToProps = (dispatch: any) => {
  return {todayCostItemsGot: (todayCostItems: TodayCostItem[]) => {
    dispatch({
      type: TYPES.TODAY_COST_ITEMS_GOT,
      payload: todayCostItems,
    })
  }}
}


export default connect(mapStateToProps, mapDispatchToProps)((props: Props) :JSX.Element => {
  const [freeze, setFreeze] = useState(false)
  return <NewCostItem navigateTo={props.navigation.navigate} freeze={freeze} saveToStorageAndFreeze={(cost: TodayCostItem) :void => {
    setFreeze(true)
    save(cost).then(() => {
      return readAllCostToday()
    }).then((allCost: TodayCostItem[]) => {
      console.log(allCost)
      setFreeze(false)
      props.todayCostItemsGot(allCost);
      //TODO: dispatch action TODAY_COST_ITEMS_GOT
    })
  }} ></NewCostItem>
})
