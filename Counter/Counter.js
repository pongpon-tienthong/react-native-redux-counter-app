import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const counter = (props) => (
  <View>
    <Button title="Up" onPress={props.increment}></Button>
    <Text style={styles.counter}>{props.count}</Text>
    <Button title="Down" onPress={props.decrement}></Button>
  </View>
);

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});

export default counter;