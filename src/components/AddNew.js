import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';

export default AddNew = ({ onPress, customStyle }) => {
  return (
    <View>
      <TouchableOpacity
        style={[{
          backgroundColor: Colors.primary,
          borderRadius: 100,
          alignItems: 'center',
          shadowOffset: 15,
          shadowColor: Colors.primary,
          shadowRadius: 5,
          elevation: 10
        }, {...customStyle}]}
        activeOpacity={0.5}
        onPress={onPress}>
        <Icon
          name="plus"
          style={{ padding: 5 }}
          color={Colors.background}
          size={40}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});
