import {TYPES, TodayCostItem} from '../types'
import { createStore } from 'redux'

export interface RootState {
  todayCostItems: TodayCostItem[],
}
const initialState : RootState = {
  todayCostItems: [],
}
export const store = createStore((state = initialState, action: any) => {
  if(action.type == TYPES.TODAY_COST_ITEMS_GOT){
    return {
      todayCostItems: action.payload
    }
  }else{
    return state
  }
})