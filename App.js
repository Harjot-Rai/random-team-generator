import React, { useState, useEffect } from 'react';
import { AsyncStorage, StyleSheet, View, FlatList } from 'react-native';
import Header from './components/header';
import Team from './components/team';
import Players from './components/players';

export default function App() {
  const [key, setKey] = useState(0)
  const [teams, setTeams] = useState([
    { team1: 'Player1 Player2', team2: 'Player3 Player4', key: key },
  ])

  const submitHandler = (team1, team2) => {
    const newKey = key + 1
    const allKeys = Array.from(Array(newKey + 1).keys())

    setKey(newKey)
    saveTeams(team1, team2, newKey.toString())

    allKeys.forEach(k => {
      loadTeams(k.toString()).then(result => console.log(result));
    })

    setTeams(prevTeams => {
      return [
        { team1, team2, key: newKey },
        ...prevTeams
      ];
    });
  };

  const saveTeams = async(team1, team2, teamKey) => {
    try {
      await AsyncStorage.setItem(teamKey, team1 + ',' + team2)
    } catch (error) {
      alert(error)
    }
  }

  const loadTeams = async(teamKey) => {
    try {
      const result = await AsyncStorage.getItem(teamKey)
      return result;
    } catch (error) {
      console.log(error)
    }
    return
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Players submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={teams}
            renderItem={({ item }) => (
              <Team teams={item} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
