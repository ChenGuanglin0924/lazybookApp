export enum BillCategory {
  expense = 0,
  income = 1,
}

export interface BillRecord {
  id: number;
  category: BillCategory;
  type: string;
  subType: string;
  title: string;
  price: number;
  date: string;
  time: string;
  description?: string;
  location?: [string, string];
}
