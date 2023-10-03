import {
  View,
  StyleSheet,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from './components/Button';
import Header from './components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Task from './components/Task';

const Main = ({navigation}) => {
  useEffect(() => {
    getData();
  }, []);
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    try {
      const data = await AsyncStorage.getItem('alltasks');
      if (data == null) {
        await AsyncStorage.setItem('alltasks', JSON.stringify([]));
        getData();
      }
      setTasks(JSON.parse(data));
    } catch (e) {
      // error reading value
    }
  };

  if (tasks == null) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => console.log(tasks)}
        style={{backgroundColor: 'gray', padding: 5}}>
        <Text>CONSOLE</Text>
      </Pressable>
      <Button navigation={navigation} getData={getData} />
      <Header />
      {tasks.map(t => (
        <Task navigation={navigation} task={t} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 24,
    padding: 24,
    backgroundColor: '#000000',
    height: '100%',
  },
  button: {
    padding: 10,
    borderStyle: 'solid',
    backgroundColor: '#151515',
    borderWidth: 0.5,
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default Main;
