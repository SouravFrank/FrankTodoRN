import React from 'react';
import { View } from 'react-native-animatable';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/colors';
import Waves from '../constants/waves'

const WavyHeader = ({
  customStyles,
  customHeight,
  customTop,
  customBgColor,
  customWavePattern,
}) => {
  return (
    <View style={customStyles}>
      <View style={{ backgroundColor: customBgColor, height: customHeight }}>
        <Svg
          height="100%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: customTop }}>
          <Path fill={customBgColor} d={customWavePattern} />
        </Svg>
      </View>
    </View>
  );
};

const LeftButton = ({ onPress, leftIcon }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => onPress()}>
        <Icon name={leftIcon} color={Colors.background} size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default PageHeader = ({ title, leftIcon, wave, onPress }) => {
  return (
    <View style={styles.container}>
      <WavyHeader
        customStyles={styles.svgCurve}
        customHeight={90}
        customTop={70}
        customBgColor={Colors.primary}
        customWavePattern={Waves[wave]}
      />
      <LeftButton leftIcon={leftIcon} onPress={() => onPress()} />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  svgCurve: {
    position: 'absolute',
    width: Dimensions.get('window').width,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  menu: {
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginTop: 20,
  },
});
