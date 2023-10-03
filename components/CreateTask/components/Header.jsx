import {View, Image, StyleSheet, Pressable, Text} from 'react-native';
import React from 'react';

const Header = ({navigation}) => {
  const handleButton = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Image
        style={{width: 20, height: 20, tintColor: '#ffffff'}}
        source={require('/Code/App Development/todolist/assets/menu.png')}
      />
      <Text style={{fontSize:20}}>Task</Text>
      <Pressable onPress={handleButton}>
        <Image
          style={{width: 20, height: 20, tintColor: '#ffffff'}}
          source={require('../../../assets/x.png')}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Header;
