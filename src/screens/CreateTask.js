import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Input } from 'react-native-elements';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Dialog, { DialogContent, ScaleAnimation } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { storeData, getData } from '../utils/asyncStorage';
import * as ROUTE_CONSTANTS from '../navigations/navigationConstants';
import Colors from '../constants/colors';
import { MyCheckbox, MyButton, DatePicker, DateCard } from '../components';

export default CreateTask = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [popup, setPopup] = useState(false);
  const [popupContent, setpopupContent] = useState('PickDate');
  const [dateInput, setDateInput] = useState('');

  const PickDate = ({
    radioState,
    setRadioState,
    aDate,
    setADate,
    // dateRange,
    // setDateRange,
    // dateCustom,
    // setDateCustom,
  }) => {
    const [showPop, setShowPop] = useState(false);

    const radio_props = [
      { label: 'Once', value: 'Once' },
      { label: 'Monthly', value: 'Monthly' },
      { label: 'Yearly', value: 'Yearly' },
    ];

    return (
      <View style={{ marginVertical: 20 }}>
        <RadioForm formHorizontal={true} animation={true}>
          {radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={true} key={i}>
              <RadioButtonInput
                obj={obj}
                index={i}
                borderWidth={1.5}
                isSelected={radioState === obj.value}
                buttonOuterColor={radioState === obj.value ? Colors.primary : Colors.inactive}
                buttonInnerColor={Colors.primary}
                buttonSize={12}
                buttonOuterSize={20}
                buttonStyle={{}}
                buttonWrapStyle={{ marginLeft: 10 }}
                onPress={(value) => {
                  setRadioState(value);
                }}
              />
              <RadioButtonLabel
                obj={obj}
                index={i}
                labelHorizontal={true}
                labelStyle={{ fontSize: 20, color: Colors.active, marginRight: 5 }}
                labelWrapStyle={{}}
                onPress={(value) => {
                  setRadioState(value);
                }}
              />
            </RadioButton>
          ))}
        </RadioForm>

        <DatePicker visiblity={showPop} setVisiblity={setShowPop} onConfirm={setADate} />

        <View style={{ marginLeft: 5, marginTop: 10, alignItems: 'flex-start' }}>
          <TouchableOpacity style={styles.dateSelect} onPress={() => setShowPop(true)}>
            <Icon name="calendar" color={Colors.primary} size={35} />
            {aDate ? (
              <DateCard Mydate={aDate} />
            ) : (
              <Text style={{ fontSize: 20 }}>Pick a Date</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateSelect}>
            <Icon name="calendar-multiselect" color={Colors.primary} size={35} />
            <Text style={{ fontSize: 20 }}>Pick Multiple Dates</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.dateSelect}>
            <Icon name="calendar-range" color={Colors.primary} size={35} />
            <Text style={{ fontSize: 20 }}>Pick a Date Range</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const Regular = ({ daily, setDaily, weekDays, setWeekDays }) => {
    const handleDaily = () => {
      daily
        ? setWeekDays([])
        : setWeekDays([
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
          ]);

      setDaily(!daily);
    };
    const handleCheck = (props) => {
      let newSetWeekDays = [...weekDays, props];
      if (weekDays.includes(props)) {
        newSetWeekDays = newSetWeekDays.filter((value) => value !== props);
      }
      setWeekDays(newSetWeekDays);
    };

    return (
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <MyCheckbox value="Daily" isChecked={daily} onPress={handleDaily} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <MyCheckbox
            value="Sunday"
            disabled={daily}
            isChecked={weekDays.includes('Sunday')}
            onPress={() => handleCheck('Sunday')}
          />
          <MyCheckbox
            value="Monday"
            disabled={daily}
            isChecked={weekDays.includes('Monday')}
            onPress={() => handleCheck('Monday')}
          />
          <MyCheckbox
            value="Tuesday"
            disabled={daily}
            isChecked={weekDays.includes('Tuesday')}
            onPress={() => handleCheck('Tuesday')}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <MyCheckbox
            value="Wednesday"
            disabled={daily}
            isChecked={weekDays.includes('Wednesday')}
            onPress={() => handleCheck('Wednesday')}
          />
          <MyCheckbox
            value="Thursday"
            disabled={daily}
            isChecked={weekDays.includes('Thursday')}
            onPress={() => handleCheck('Thursday')}
          />
          <MyCheckbox
            value="Friday"
            disabled={daily}
            isChecked={weekDays.includes('Friday')}
            onPress={() => handleCheck('Friday')}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <MyCheckbox
            value="Saturday"
            disabled={daily}
            isChecked={weekDays.includes('Saturday')}
            onPress={() => handleCheck('Saturday')}
          />
        </View>
      </View>
    );
  };

  const DatePopup = ({ dateInput, setDateInput }) => {
    const [radioState, setRadioState] = useState('');
    const [aDate, setADate] = useState('');
    // const [dateRange, setDateRange] = useState('');
    // const [dateCustom, setDateCustom] = useState('');
    const [daily, setDaily] = useState(false);
    const [weekDays, setWeekDays] = useState([]);

    const handleDatePicker = () => {
      radioState && aDate && setDateInput({ date: aDate, radioState: radioState });
      daily && setDateInput('Daily');
      weekDays.length && !daily && setDateInput(weekDays);

      setPopup(false);
    };

    const modalChange = (value) => {
      setDateInput('');
      setpopupContent(value);
    };

    return (
      <View style={{ width: wp('80%') }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => modalChange('PickDate')}>
            <View style={popupContent === 'PickDate' ? styles.activePopBox : styles.inactivePopBox}>
              <Text
                style={popupContent === 'PickDate' ? styles.activePopHead : styles.inactivePopHead}>
                Pick Date
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => modalChange('Regular')}>
            <View style={popupContent === 'Regular' ? styles.activePopBox : styles.inactivePopBox}>
              <Text
                style={popupContent === 'Regular' ? styles.activePopHead : styles.inactivePopHead}>
                Regular
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          {popupContent === 'PickDate' ? (
            <PickDate
              radioState={radioState}
              setRadioState={setRadioState}
              aDate={aDate}
              setADate={setADate}
              // dateRange={dateRange}
              // setDateRange={setDateRange}
              // dateCustom={dateCustom}
              // setDateCustom={setDateCustom}
            />
          ) : (
            <Regular
              daily={daily}
              setDaily={setDaily}
              weekDays={weekDays}
              setWeekDays={setWeekDays}
            />
          )}
        </View>
        <MyButton title="Save" mode="contained" onPress={() => handleDatePicker()} />
      </View>
    );
  };

  const handleCreateReminder = async () => {
    const storedData = await getData('frank.savedTasks');
    // const datePicked 
    // const newData = storedData ? [...storedData, { title, description,  }] : [{ title, description }];
console.log("Title", title, "desc", description, "date", dateInput, "done");
const obj = {title, description, date: dateInput, done: false}
console.log(obj);
    // await storeData('frank.savedNotes', newData);
    navigation.navigate(ROUTE_CONSTANTS.ROUTE_MY_TASKS);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 2 }}>
        <PageHeader
          title="Create your Task!"
          leftIcon="backburger"
          wave="wave2"
          onPress={() => navigation.pop()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Input
          label="Title"
          placeholder="Enter Task Ttile"
          onChangeText={(value) => setTitle(value)}
          value={title}
        />
        <Input
          label="Description"
          placeholder="Enter Task Description"
          inputStyle={{ height: hp('17%') }}
          multiline={true}
          onChangeText={(value) => setDesc(value)}
          value={description}
        />

        <Dialog
          visible={popup}
          dialogAnimation={dialogAnimation}
          onTouchOutside={() => {
            setPopup(false);
          }}>
          <DialogContent>
            <DatePopup dateInput={dateInput} setDateInput={setDateInput} />
          </DialogContent>
        </Dialog>

        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => setPopup(true)}>
            {dateInput ? (
              <View>
                <Text style={styles.calendarText}>Scheduled for</Text>
                {popupContent === 'PickDate' ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text>{dateInput.radioState}</Text>
                    <DateCard Mydate={dateInput.date} />
                  </View>
                ) : (
                  <Text>{dateInput}</Text>
                )}
              </View>
            ) : (
              <View style={styles.calendarContainer}>
                <Text style={styles.calendarText}>Remind on</Text>
                <Icon name="calendar-edit" color={Colors.primary} size={35} />
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <MyButton title="Remind Me" mode="contained" onPress={() => handleCreateReminder()} />
        <MyButton title="Cancel" mode="outlined" onPress={() => navigation.pop()} />
      </View>
    </View>
  );
};

const dialogAnimation = new ScaleAnimation({
  initialValue: 0,
  useNativeDriver: true,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  inputContainer: {
    flex: 5,
    marginTop: 20,
    marginHorizontal: 10,
  },
  buttonContainer: {
    flex: 1,
    width: '80%',
    marginHorizontal: '10%',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  calendarText: {
    fontSize: 18,
    fontWeight: '900',
    opacity: 0.9,
    marginRight: 20,
  },
  activePopHead: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  activePopBox: {
    paddingVertical: 15,
    alignItems: 'center',
    width: wp('40%'),
  },
  inactivePopHead: {
    fontSize: 16,
  },
  inactivePopBox: {
    paddingVertical: 15,
    width: wp('40%'),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.inactive,
  },
  dateSelect: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
