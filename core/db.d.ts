import {TodayCostItem} from '../types'

export function save(item: TodayCostItem): Promise;
export function readAllCostToday(): Promise<TodayCostItem[]>;
export default db;