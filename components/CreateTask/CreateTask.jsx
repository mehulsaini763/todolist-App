import {StyleSheet, View} from 'react-native';
import React from 'react';

import Header from './components/Header';
import Body from './components/Body';

const CreateTask = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <Body navigation={navigation} />
    </View>
  );
};

export default CreateTask;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000000',
    height: '100%',
  },
});
