import React from 'react';
import { StyleSheet, Linking } from 'react-native';
import { View } from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';

export default CreatedByFrank = () => {
  const facebookURL = 'https://www.facebook.com/ssadhukhan990';
  const instagramURL = 'https://www.instagram.com/frank_2282/';

  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.createdBy}>Created by </Text>
        <Text style={styles.frank}>Frank</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(facebookURL);
          }}>
          <FontAwesome
            name="facebook-square"
            color={colors.primary}
            size={20}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(instagramURL);
          }}>
          <FontAwesome
            name="instagram"
            color={colors.primary}
            size={20}
            style={styles.iconStyle}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    paddingLeft: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  createdBy: {
    textAlign: 'justify',
    color: 'grey',
    fontSize: 14,
  },
  frank: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
