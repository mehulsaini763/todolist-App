import { StyleSheet, View } from 'react-native'
import React from 'react'
import Body from './components/Body'

const EditTask = () => {
  return (
    <View style={styles.container}>
      <Body/>
    </View>
  )
}

export default EditTask

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000000',
    height: '100%',
  },
});