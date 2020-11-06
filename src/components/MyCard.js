import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';

export default MyCard = ({ title, description }) => {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Text>{description}</Text>
    </Card>
  );
};
