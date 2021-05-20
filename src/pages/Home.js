import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  PlatformColor,
  FlatList,
} from 'react-native'
import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'


export function Home() {

  const [newSkill, setNewSkill] = useState('')
  const [mySkill, setMySkill] = useState([])
  const [greeting, setGreeting] = useState([])

  function handleAddNewSkill() {
    setMySkill(olsState => [...olsState, newSkill])
    setNewSkill('');
  }

  useEffect(() => {
    const currentHour = new Date().getHours()

    if (currentHour < 12) {
      setGreeting('Good Morning')
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon')
    } else {
      setGreeting('Good night')
    }
  }, [])

  return (
    <>
      <View style={styles.container}>

        <Text style={styles.title}>Welcome, Vitor</Text>
        <Text style={styles.greetings}>
          {greeting}
        </Text>

        <TextInput
          style={styles.input}
          placeholder="New Skill"
          placeholderTextColor='#555'
          onChangeText={setNewSkill}
        />

        <Button onPress={handleAddNewSkill} />

        <Text style={[styles.title, { marginVertical: 54 }]}>
          My Skills
        </Text>

        <FlatList
          data={mySkill}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <SkillCard skill={item} />
          )}
        />

      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 32,
    paddingVertical: 64,

  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 16,
    padding: PlatformColor.OS === 'ios' ? 16 : 12,
    marginTop: 32,
    borderRadius: 8
  },
  greetings: {
    color: '#fff'
  }
})



