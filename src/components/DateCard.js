import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

export default DateCard = ({ Mydate }) => {
  const date = moment(Mydate);
  return (
    <View style={{ marginLeft: 10 }}>
      <View style={styles.activeDateBox}>
        <Text style={styles.month}>{date.format('MMM')}</Text>
        <Text style={styles.date}>{date.format('D')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeDateBox: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  date: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    padding: 5,
    color: 'grey',
  },
  month: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
  },
});
