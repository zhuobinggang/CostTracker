export interface TodayCostItem{
  type: string;
  cost: number;
  detail: string;
  time?: string;
}

export const TYPES = {
  TODAY_COST_ITEMS_GOT: 'TODAY_COST_ITEMS_GOT',
  WEEKLY_ANALYSIS_GOT: 'WEEKLY_ANALYSIS_GOT',
  MONTHLY_ANALYSIS_GOT: 'MONTHLY_ANALYSIS_GOT',
}