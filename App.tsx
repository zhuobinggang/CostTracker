import React, {useState, useEffect} from 'react';
import TodayCostAnalysis from './containers/TodayCostAnalysisContainer';
import NewCostItem from './containers/NewCostItemContainer';
import WeekCostAnalysis from './containers/WeekCostAnalysis'
import MonthlyCostAnalysis from './containers/MonthlyCostAnalysis'
import { Provider } from 'react-redux'
import {store} from './store'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodayCostAnalysis">
          <Stack.Screen name="MonthlyCostAnalysis" component={MonthlyCostAnalysis} />
          <Stack.Screen name="TodayCostAnalysis" component={TodayCostAnalysis} />
          <Stack.Screen name="NewCostItem" component={NewCostItem} />
          <Stack.Screen name="WeekCostAnalysis" component={WeekCostAnalysis} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
