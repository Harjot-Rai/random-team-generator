import React from 'react'
import {StyleSheet, Text} from 'react-native';

export default function Team({ teams }) {
  return (
    <Text style={styles.item}>
      <Text style={styles.team}>
        Team 1: {teams.team1}
        {"\n"}
        Team 2: {teams.team2}
      </Text>
    </Text>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 2,
  },
  team: {
    fontSize: 20,
  },
});
