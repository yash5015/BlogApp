import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import React from 'react';
import {FontWeight} from './FontWeight';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import OTPHandler from './OTPHandler';

const OTP = () => {
  return (
    <View>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.loginContainer}>
          <View style={styles.loginImage}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/05/22/42/06/360_F_522420658_7XkgYs7EUvNzrx9PvF6dt37VDJhmPfnf.jpg',
              }}
              style={styles.PageImage}></Image>
          </View>
          <View style={styles.secondPart}>
            <View style={styles.secondCont}>
              <View>
                <Text style={styles.pageHeading}>Enter OTP</Text>
              </View>

              <View style={styles.forgotText}>
                <Text style={styles.termText}>
                  An 4 digit code has been sent to
                  <Text style={styles.highlight}></Text>
                </Text>
                <Text style={styles.termText}>+91 8965764210</Text>
              </View>
              <View style={styles.loginForm}>
                <View style={styles.inputFieldContainer}>
                  <OTPHandler />
                </View>

                <View style={styles.signButton}>
                  <TouchableOpacity style={styles.continueButton}>
                    <Text style={styles.btnText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  loginContainer: {height: '100%', paddingHorizontal: 30, paddingTop: 30},
  loginImage: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PageImage: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  secondPart: {
    flex: 0.7,
    // backgroundColor: 'yellow',
  },
  secondCont: {
    height: '100%',
    paddingVertical: 30,
    gap: 20,
    // justifyContent: 'space-evenly',
  },
  pageHeading: {
    fontWeight: '700' as FontWeight,
    fontSize: 35,
    color: '#000',
  },
  loginForm: {},
  inputFieldContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  otp: {
    // flex: 0.25,
    marginRight: 20,
    backgroundColor: '#e3e3e6',
    borderRadius: 10,
    width: 40,
  },
  inputField: {
    textAlign: 'center',
    borderColor: 'lightgrey',
  },
  Termcond: {
    marginVertical: 20,
    width: '100%',
  },
  forgotText: {
    // alignSelf: 'center',
  },
  termText: {
    fontSize: 16,
  },
  highlight: {
    color: 'blue',
    fontWeight: '500' as FontWeight,
    fontSize: 15,
  },
  signButton: {
    color: 'blue',
    paddingVertical: 10,
    borderRadius: 10,
  },
  continueButton: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 10,
    marginVertical: 30,
    // fontWeight: '700' as FontWeight,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500' as FontWeight,
  },
});
