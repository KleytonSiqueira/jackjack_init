/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import TaskList from './screens/taskList';
import ViewTask from './screens/viewTask';
import AddTask from './screens/addTask';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Home = ({navigation, route}) => {
  return <TaskList navigation={ navigation } route={ route } list={[]} />;
}
const View = ({navigation, route}) => {
  return <ViewTask navigation={ navigation } route={ route } />;
}
const Add = ({navigation, route}) => {
  return <AddTask navigation={ navigation } route={ route } />;
}

const App: () => Node = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="view" component={View} />
        <Stack.Screen name="add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
