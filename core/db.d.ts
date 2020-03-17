import {TodayCostItem} from '../types'

export function save(item: TodayCostItem): Promise;
export function readAllCostToday(): Promise<TodayCostItem[]>;
export function readAllCostInDate(date: Date): Promise<TodayCostItem[]>;
export default db;