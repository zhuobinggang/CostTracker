import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodayCostAnalysis from './containers/TodayCostAnalysisContainer';
import NewCostItem from './containers/NewCostItemContainer';

export default function App() {
  const [page, setPage] = useState('TodayCostAnalysis');
  const navigateTo : (targetPage: string) => void = (targetPage) => {
    setPage(targetPage)
  };
  return (
    <View>
      {page=='TodayCostAnalysis' && (<TodayCostAnalysis navigateTo={navigateTo}></TodayCostAnalysis>)}
      {page=='NewCostItem' && (<NewCostItem></NewCostItem>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
