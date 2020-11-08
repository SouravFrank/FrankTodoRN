import React from 'react';
import { Button } from 'react-native-paper';

export default MyButton = ({ title, icon, mode, onPress }) => {
  return (
    <Button
      icon={icon}
      mode={mode}
      onPress={() => onPress()}
      dark={mode == 'contained' ? true : false}>
      {title}
    </Button>
  );
};
