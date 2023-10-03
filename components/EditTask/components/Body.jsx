import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Switch,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';

const Body = () => {
  const router = useRoute();
  const [newTask, setNewTask] = useState(router.params.task);

  const updateTask = () => {};

  const deleteTask = () => {};
  return (
    <View>
      <View>
        <Text>Title</Text>
        <TextInput
          style={styles.bg}
          onChangeText={e => setTask({...newTask, title: e})}
          value={newTask.title}
        />
      </View>
      <View>
        <Text>Description</Text>
        <TextInput style={styles.bg} value={newTask.description} />
      </View>
      <View>
        <Text>Date</Text>
        <Text style={styles.bg}>{newTask.date}</Text>
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
      <Pressable style={styles.button} onPress={updateTask}>
        <Text></Text>
        <Text style={{color: 'black'}}>Save Changes</Text>
        <Text></Text>
      </Pressable>
      <Pressable style={styles.button} onPress={deleteTask}>
        <Text></Text>
        <Text style={{color: 'black'}}>Delete Task</Text>
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
