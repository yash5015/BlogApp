import {
  Alert,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPass from './components/ForgotPass';
import ResetPass from './components/ResetPass';
import OTP from './components/OTP';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeMain from './components/HomeMain';
import {Provider as PaperProvider} from 'react-native-paper';
import Interest from './components/MainApp/Interest';
import Deatils from './components/MainApp/Deatils';
import UploadBlog from './components/MainApp/UploadBlog';
import {
  notificationListner,
  requestUserPermission,
} from './components/src/Utils/NotificationServices';
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
        .then(res => {
          console.log('PushNoti res', res);

          if (!!res && res == 'granted') {
            requestUserPermission();
            notificationListner();
          }
        })
        .catch(error => {
          console.log('something went wrong', error);
        });
    } else {
    }
  }, []);
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Interest"
            component={Interest}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          <Stack.Screen name="ResetPass" component={ResetPass} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen
            name="Details"
            component={Deatils}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomeMain"
            component={HomeMain}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UploadBlog"
            component={UploadBlog}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
