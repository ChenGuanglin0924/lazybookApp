import React from 'react';
import {Image, StyleSheet, TouchableHighlight, View} from 'react-native';
import {BillRecord} from './interface';
import InnerText from '../../components/InnerText';

export interface BillItemProps {
  bill: BillRecord;
}

const BillItem = (props: BillItemProps) => {
  const {bill} = props;

  return (
    <TouchableHighlight
      underlayColor="#eee"
      onPress={() => {
        console.log('bill', bill);
      }}>
      <View style={styles.bill}>
        <View style={styles.left}>
          <Image
            style={styles.icon}
            source={require('../../assets/imgs/tabs/bill_on.png')}
          />
        </View>
        <View style={styles.right}>
          <View style={styles.header}>
            <InnerText bold style={styles.title}>
              {bill.title}
            </InnerText>
            <InnerText bold style={styles.price}>
              {bill.price}
            </InnerText>
          </View>
          <InnerText size="small">{bill.time}</InnerText>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  bill: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginTop: 8,
  },
  left: {
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    width: 36,
    height: 36,
    marginRight: 8,
  },
  right: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'rgba(0,0,0,.8)',
  },
  price: {
    marginLeft: 'auto',
    color: 'rgba(0,0,0,.8)',
  },
});

export default BillItem;
