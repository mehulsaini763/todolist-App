import {Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({navigation, getData}) => {
  const handleButton = () => {
    navigation.navigate('CreateTask',{getData,});
  };

  return (
    <Pressable style={styles.button} onPress={handleButton}>
      <Image
        style={{width: 30, height: 30, tintColor: '#ffffff'}}
        source={require('/Code/App Development/todolist/assets/add.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
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

export default Button;
