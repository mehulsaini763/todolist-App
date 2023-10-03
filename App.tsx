import React from 'react';
import Main from './components/Main/Main';
import CreateTask from './components/CreateTask/CreateTask';
import EditTask from './components/EditTask/EditTask';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Main">
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="CreateTask" component={CreateTask} />
          <Stack.Screen name="EditTask" component={EditTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
