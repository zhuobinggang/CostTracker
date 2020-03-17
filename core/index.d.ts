import {TodayCostItem, PercentMap} from '../components/TodayCostAnalysis';

export function getAnalysis(costItems: TodayCostItem[]): PercentMap;
export function totalCost(costItems: TodayCostItem[]): number;
export function getMonthlyAnalysis(date: string | Date): Promise<{[name: string]: number}>;
export function getWeeklyAnalysis(date: string | Date): Promise<{[name: string]: number}>;