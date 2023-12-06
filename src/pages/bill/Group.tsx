import React from 'react';
import {StyleSheet, View} from 'react-native';
import InnerText from '../../components/InnerText';
import {BillRecord} from './interface';
import BillItem from './Item';
import {calcBillCategory} from './util';

export interface BillGroupPorps {
  date: string;
  bills: BillRecord[];
}

const BillGroup = (props: BillGroupPorps) => {
  const {date, bills} = props;

  const {income, expense} = calcBillCategory(bills);

  return (
    <View style={styles.group}>
      <View style={styles.header}>
        <InnerText size="small" style={styles.title}>
          {date}
        </InnerText>
        <View style={styles.stat}>
          <InnerText
            size="small"
            style={styles.income}>{`收 ${income}`}</InnerText>
          <InnerText
            size="small"
            style={styles.expense}>{`支 ${expense}`}</InnerText>
        </View>
      </View>
      <View style={styles.content}>
        {bills.map(bill => (
          <BillItem key={bill.id} bill={bill} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    display: 'flex',
    paddingLeft: 16,
    paddingRight: 16,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 8,
  },
  title: {
    color: 'gray',
  },
  stat: {
    marginLeft: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
  income: {
    color: 'rgb(0,255,0)',
  },
  expense: {
    marginLeft: 4,
    color: 'rgb(255,0,0)',
  },
  content: {
    display: 'flex',
  },
});

export default BillGroup;
