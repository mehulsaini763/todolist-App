import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {
  ArrowRightCircleIcon,
  CheckCircleIcon,
} from 'react-native-heroicons/outline';
// import Adjustment from 'react-native-heroicons/outline/AdjustmentsVerticalIcon'

const Task = ({task,navigation}) => {
  const editTask = () => {
    navigation.navigate("EditTask",{task,});
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={() => updateTask()}>
        <CheckCircleIcon color={'white'} />
      </Pressable>
      <Pressable
        onPress={editTask}
        style={{
          flexGrow: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 18}}>{task.title}</Text>
        <ArrowRightCircleIcon color={'white'} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Task;
