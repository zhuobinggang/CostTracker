import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodayCostAnalysis from './containers/TodayCostAnalysisContainer';
import NewCostItem from './containers/NewCostItemContainer';
import { Provider } from 'react-redux'
import {TYPES, TodayCostItem} from './types'
import {store} from './store'
import {readAllCostToday} from './core/db'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [page, setPage] = useState('TodayCostAnalysis');
  const navigateTo : (targetPage: string) => void = (targetPage) => {
    setPage(targetPage)
  };
  return (
    
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodayCostAnalysis">
          <Stack.Screen name="TodayCostAnalysis" component={TodayCostAnalysis} />
          <Stack.Screen name="NewCostItem" component={NewCostItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
