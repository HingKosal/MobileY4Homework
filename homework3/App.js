import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default () => {
  return (
    <View>
      <Text style={styles.title}>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'blue',
    fontSize: 25,
    textAlign: 'center',
    margin: 45,
  },
});
