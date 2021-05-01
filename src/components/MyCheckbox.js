import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';

export default MyCheckbox = ({ value, isChecked, onPress, disabled }) => {
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={{ flexDirection: 'row', alignItems: 'center' }}
        onPress={() => onPress(!isChecked)}>
        {isChecked ? (
          <Icon
            name="checkbox-marked-circle-outline"
            style={{ padding: 5 }}
            color={Colors.primary}
            size={30}
          />
        ) : (
          <Icon
            name="checkbox-blank-circle-outline"
            style={{ padding: 5 }}
            color={Colors.inactive}
            size={30}
          />
        )}
        <Text
          style={{
            fontSize: 16,
            color: isChecked ? (disabled ? Colors.inactive : Colors.primary) : Colors.inactive,
          }}>
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
