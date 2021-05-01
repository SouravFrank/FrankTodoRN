import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { TouchableRipple } from 'react-native-paper';
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import moment from 'moment';

import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
import * as actions from '../redux/actions';

import Colors from '../constants/colors';
import { DatePicker } from '../components';

const MyTasksScreen = ({ navigation, savedNotes, onLoadMyNotes }) => {
  const today = moment();

  const [selectedDate, setSelectedDate] = useState(today);
  const [headerTitle, setHeaderTitile] = useState('Today');
  const [visiblity, setVisiblity] = useState(false);
  const isFocused = useIsFocused();

  const DateBox = ({ date, active }) => {
    return (
      <View style={styles.dateBox}>
        <TouchableRipple
          onPress={
            active ? () => handleDoubleTap() : () => setSelectedDate(date)
          }
          onLongPress={() => setVisiblity(true)}
          rippleColor={Colors.primary}
          style={{ overflow: 'hidden', borderRadius: 20 }}>
          <View style={active ? styles.activeDateBox : styles.inActiveDateBox}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: active ? 'black' : 'grey',
              }}>
              {date.format('MMM')}
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: active ? 30 : 26,
                padding: 5,
                color: active ? 'black' : 'grey',
              }}>
              {date.format('D')}
            </Text>
          </View>
        </TouchableRipple>
      </View>
    );
  };

  const DateView = () => {
    const yesterday = moment(selectedDate).subtract(1, 'day');
    const yesterday2 = moment(selectedDate).subtract(2, 'day');
    const tomorrow = moment(selectedDate).add(1, 'day');
    const tomorrow2 = moment(selectedDate).add(2, 'day');
    return (
      <View style={styles.dateRow}>
        <DateBox date={yesterday2} active={false} />
        <DateBox date={yesterday} active={false} />
        <DateBox date={selectedDate} active={true} />
        <DateBox date={tomorrow} active={false} />
        <DateBox date={tomorrow2} active={false} />
      </View>
    );
  };

  const dayCheck = () => {
    const yesterday = moment().subtract(1, 'day');
    const tomorrow = moment().add(1, 'day');
    return selectedDate.isSame(today, 'day')
      ? 'Today'
      : selectedDate.isSame(yesterday, 'day')
      ? 'Yesterday'
      : selectedDate.isSame(tomorrow, 'day')
      ? 'Tomorrow'
      : selectedDate.format('dddd');
  };

  const changeDate = (date) => {
    setSelectedDate(moment(date));
  };

  let lastTap;
  const handleDoubleTap = () => {
    const now = moment().format('x');
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      changeDate(today);
    } else {
      lastTap = now;
    }
  };

  useEffect(() => {
    const whichDay = dayCheck();
    setHeaderTitile(whichDay);
  }, [selectedDate]);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <PageHeader
          title={headerTitle}
          leftIcon="menu"
          wave="wave4"
          onPress={() => navigation.toggleDrawer()}
        />
      </View>
      <View style={{ flex: 2.9, marginBottom: 20 }}>
        {savedNotes && savedNotes.length ? (
          <FlatList
            data={savedNotes}
            renderItem={renderItem}
            keyExtractor={(item) => item.title}
          />
        ) : (
          <NothingSaved title="Tasks" />
        )}
      </View>
      <View>
        <DatePicker
          visiblity={visiblity}
          setVisiblity={setVisiblity}
          onConfirm={changeDate}
        />
        <DateView active={true} />
      </View>
      <View style={styles.MainContainer}>
        <AddNew
          onPress={() =>
            navigation.navigate(ROUTE_CONSTANTS.ROUTE_CREATE_TASKS)
          }
          customStyle={{elevation: 0}}
        />
      </View>
    </View>
  );
};

const centerStyles = {
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  MainContainer: {
    flex: 1,
    position: 'absolute',
    width: 50,
    height: 50,
    right: 20,
    top: 15,
    ...centerStyles,
  },
  dateBox: {
    borderRadius: 20,
    backgroundColor: Colors.background,
    shadowColor: 'rgba(0,0,0,1)',
    overflow: 'hidden',
    margin: 5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.8,
  },
  activeDateBox: {
    width: 80,
    height: 80,
    ...centerStyles,
  },
  inActiveDateBox: {
    width: 65,
    height: 65,
    ...centerStyles,
  },
  dateRow: {
    flexDirection: 'row',
    margin: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    // isAuthenticated: state.auth.isAuthenticated ? true : false,
    savedNotes: state.notes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadMyNotes: () => actions.loadMyNotes(dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTasksScreen);
