import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {mockBills} from './data';
import {groupBy} from 'lodash-es';
import BillGroup from './Group';

const Book = () => {
  const groupBills = Object.entries(groupBy(mockBills, bill => bill.date));

  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require('../../assets/imgs/background/bill.jpg')}
          style={styles.image}
        />
      </View>
      <View>
        {groupBills.map(([date, bills]) => {
          return <BillGroup key={date} date={date} bills={bills} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});

export default Book;
