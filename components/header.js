import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Team Generator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 35,
    backgroundColor: 'indigo',
  },
  title: {
    textAlign: 'center',
    color: 'gold',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
