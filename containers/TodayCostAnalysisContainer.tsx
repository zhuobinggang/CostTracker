import React from 'react';
import TodayCostAnalysis from '../components/TodayCostAnalysis';

const mockTodayCostItems = [{
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

export default () => {
 return (<TodayCostAnalysis todayCostItems={mockTodayCostItems}></TodayCostAnalysis>)
}