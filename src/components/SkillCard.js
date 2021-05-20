import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export function SkillCard({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>
        {skill}
      </Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginVertical: 8
  },
  textSkill: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  }
})



