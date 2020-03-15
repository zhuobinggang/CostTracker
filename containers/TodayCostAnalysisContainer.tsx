import React from 'react';
import TodayCostAnalysis from '../components/TodayCostAnalysis';
import {getAnalysis, totalCost} from '../core/index.js';
import {TodayCostItem} from '../types'

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
  navigateTo: (targetName: string)  => void;
}

export default ({navigateTo} : Props) => {
 return (<TodayCostAnalysis 
  navigateTo={navigateTo}
  todayCostItems={mockTodayCostItems}
  percentMap={getAnalysis(mockTodayCostItems)}
  totalCost={totalCost(mockTodayCostItems)}
  ></TodayCostAnalysis>)
}