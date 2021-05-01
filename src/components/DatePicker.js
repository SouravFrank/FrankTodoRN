import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default DatePicker = ({ visiblity, setVisiblity, onConfirm }) => {

  const hideDatePicker = () => {
    setVisiblity(false);
  };

  const handleConfirm = (date) => {
    onConfirm(date);
    hideDatePicker();
  };

  return (
    <DateTimePickerModal
      isVisible={visiblity}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  );
};
