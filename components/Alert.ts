import {Alert, Platform} from 'react-native';

function myAlert(alertText: string, alertTitle = 'Sorry!'){
  if(Platform.OS === 'web') {
    alert(alertText)
  }else{
    Alert.alert(alertTitle, alertText)
  }
}

export default myAlert;