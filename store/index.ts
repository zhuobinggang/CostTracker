import {TYPES, TodayCostItem} from '../types'
import { createStore } from 'redux'
import TodayCostAnalysis from '../components/TodayCostAnalysis'

export interface RootState {
  todayCostItems: TodayCostItem[],
  weekAnalysis: {[name: string]: number},
  monthlyAnalysis: any,
}
const initialState : RootState = {
  todayCostItems: [],
  weekAnalysis: {},
  monthlyAnalysis: {}
}

const todayCostItems = (partOfState: TodayCostItem[], action:{type: string, payload: any}) => {
  if(action.type == TYPES.TODAY_COST_ITEMS_GOT){
    return action.payload
  }else{
    return partOfState
  }
}

const weekAnalysis = (partOfState: any,action:{type: string, payload: any}) => {
  if(action.type == TYPES.WEEKLY_ANALYSIS_GOT){
    return action.payload;
  }else{
    return partOfState;
  }
}

const monthlyAnalysis = (partOfState: any,action:{type: string, payload: any}) => {
  if(action.type == TYPES.MONTHLY_ANALYSIS_GOT){
    return action.payload;
  }else{
    return partOfState;
  }
}

export const store = createStore((state: any  = initialState, action: any) => {
  return {
    todayCostItems: todayCostItems(state.todayCostItems, action),
    weekAnalysis: weekAnalysis(state.weekAnalysis ,action),
    monthlyAnalysis: monthlyAnalysis(state.monthlyAnalysis, action),
  }
})