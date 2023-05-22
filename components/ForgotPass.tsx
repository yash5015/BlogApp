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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ForgotPass = () => {
  return (
    <KeyboardAwareScrollView>
      <View>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.loginContainer}>
            <View style={styles.loginImage}>
              <Image
                source={{
                  uri: 'https://t4.ftcdn.net/jpg/04/20/32/53/360_F_420325313_0tgC68egfuhtzKf1OhVlZRHG6Dvv36Xt.jpg',
                }}
                style={styles.PageImage}></Image>
              {/* <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/05/22/42/06/360_F_522420658_7XkgYs7EUvNzrx9PvF6dt37VDJhmPfnf.jpg',
              }}
              style={styles.PageImage}></Image> */}
            </View>
            <View style={styles.secondPart}>
              <View style={styles.secondCont}>
                <View>
                  <View>
                    <Text style={styles.pageHeading}>Forgot</Text>
                  </View>
                  <View>
                    <Text style={styles.pageHeading}>Password?</Text>
                  </View>
                </View>
                <View style={styles.forgotText}>
                  <Text style={styles.termText}>
                    Don't worry! it happens. Please enter the address associated
                    with you account.
                    <Text style={styles.highlight}></Text>
                  </Text>
                </View>
                <View style={styles.loginForm}>
                  <View style={styles.inputFieldContainer}>
                    <Text style={styles.atRate}>@</Text>
                    <View style={styles.email}>
                      <TextInput
                        style={styles.inputField}
                        placeholder="Email Id / Mobile Number"
                        placeholderTextColor={'#9a9da1'}></TextInput>
                    </View>
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
    </KeyboardAwareScrollView>
  );
};

export default ForgotPass;

const styles = StyleSheet.create({
  loginContainer: {height: '100%', paddingHorizontal: 30, paddingTop: 30},
  loginImage: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PageImage: {
    width: '100%',
    aspectRatio: 1.2,
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
    width: '100%',
    marginVertical: 5,
  },
  atRate: {
    fontWeight: '700' as FontWeight,
    fontSize: 25,
    color: 'lightgrey',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcons: {
    alignSelf: 'center',
    color: 'lightgrey',
  },
  email: {
    flexDirection: 'row',
    flex: 0.9,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.8,
  },
  password: {
    flexDirection: 'row',
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 0.8,
    flex: 0.9,
  },
  inputField: {
    borderColor: 'lightgrey',
    flexGrow: 1,
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
