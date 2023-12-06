import {BillRecord} from './interface';

export const types = [
  {
    name: 'play',
    zhName: '休闲娱乐',
  },
  {
    name: 'life',
    zhName: '居家生活',
  },
  {
    name: 'invest',
    zhName: '投资储备',
  },
  {
    name: 'shop',
    zhName: '购物消费',
  },
];

export const subTypes = [
  {
    name: 'shop',
    zhName: '购物',
    icon: 'shop',
    color: 'orange',
    parentType: 0,
  },
  {
    name: 'daily',
    zhName: '日用品',
    icon: 'daily',
    color: 'black',
    parentType: 1,
  },
  {
    name: 'foot',
    zhName: '购物',
    icon: 'foot',
    color: '#eee',
    parentType: 1,
  },
  {
    name: 'milk',
    zhName: '奶制品',
    icon: 'milk',
    color: 'rgb(255,0,0)',
    parentType: 2,
  },
];

export const mockBills: BillRecord[] = Array.from({length: 5}, (_, index) => {
  return Array.from({length: index + 1}, (__, i) => {
    return {
      id: i,
      category: i % 2,
      type: types[i % 4].name,
      subType: subTypes[i % 4].name,
      title: 'title' + i,
      price: 19.2 + index + i,
      date: `2021.09.${String(index).padStart(2, '0')}`,
      time: '15:32',
      description: '',
      location: undefined,
    };
  });
}).flat();
