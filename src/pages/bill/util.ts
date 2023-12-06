import {BillCategory, BillRecord} from './interface';

export const calcBillCategory = (bills: BillRecord[]) => {
  return bills.reduce(
    (pre, cur) => {
      const category =
        cur.category === BillCategory.income ? 'income' : 'expense';
      pre[category] += cur.price;
      return pre;
    },
    {income: 0, expense: 0},
  );
};
