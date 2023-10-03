import {View, Text, TextInput, Image, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 24, height: 24, tintColor: '#ffffff'}}
        source={require('/Code/App Development/todolist/assets/menu.png')}
      />
      <View>
        <Text style={{fontSize: 24,fontFamily:'Montserrat-Medium',color:'white',fontWeight:'500'}}>eagrú</Text>
      </View>
      <Image
        style={{width: 24, height: 24, tintColor: '#ffffff'}}
        source={require('../../../assets/view.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
