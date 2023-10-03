import {
  Image,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import uuid from 'react-native-uuid';

const Body = ({navigation}) => {
  const route = useRoute();
  const date = new Date();

  const [task, setTask] = useState({
    id: uuid.v4(),
    title: '',
    description: '',
    date: date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear(),
    allDay: false,
    startTime: '',
    endTime: '',
    list: 'None',
    Tags: [],
  });

  const createTask = async () => {
    try {
      const data = await AsyncStorage.getItem('alltasks');
      const alltasks = JSON.parse(data);
      await AsyncStorage.setItem(
        'alltasks',
        JSON.stringify([...alltasks, task]),
      );
    } catch (e) {
      // error reading value
    }
    navigation.goBack();
    route.params.getData();
  };

  return (
    <View>
      <View>
        <Text>Title</Text>
        <TextInput
          style={styles.bg}
          onChangeText={e => setTask({...task, title: e})}
        />
      </View>
      <View>
        <Text>Description</Text>
        <TextInput style={styles.bg} />
      </View>
      <View>
        <Text>Date</Text>
        <TextInput style={styles.bg} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text>All Day</Text>
        <Switch />
      </View>
      <View>
        <Text>List</Text>
        <TextInput style={styles.bg} />
      </View>
      <View>
        <Text>Add Tags</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TextInput style={[styles.bg, {flex: 1}]}></TextInput>
          <Image
            style={{width: 20, height: 20, tintColor: 'white'}}
            source={require('/Code/App Development/todolist/assets/add.png')}
          />
        </View>
      </View>
      <Pressable style={styles.button} onPress={createTask}>
        <Text></Text>
        <Text style={{color: 'black'}}>CreateTask</Text>
        <Text></Text>
      </Pressable>
    </View>
  );
};
export default Body;

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgb(23 23 23)',
  },
  button: {
    backgroundColor: 'rgb(212 212 212)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    flexWrap: 'nowrap',
  },
});
