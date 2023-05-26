import {
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {requestUserPermission} from '../Utils/NotificationServices';

const PushNoti = () => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      )
        .then(res => {
          console.log('PushNoti res', res);
          if (!!res && res == 'granted') {
            requestUserPermission();
          }
        })
        .catch(error => {
          Alert.alert('something went wrong', error);
        });
    } else {
    }
  }, []);
  return (
    <View>
      <Text>PushNoti</Text>
    </View>
  );
};

export default PushNoti;

const styles = StyleSheet.create({});
