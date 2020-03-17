import {TodayCostItem, TYPES} from '../types'
import {readAllCostInDate} from '../core/db'

export function getCostItemsInDate(date: Date, dispatch: any){
  readAllCostInDate(date).then(items => {
    dispatch({
      type: TYPES.TODAY_COST_ITEMS_GOT,
      payload: items,
    })
  })
}

export default { getCostItemsInDate }