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
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {FontWeight} from './FontWeight';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ResetPass = () => {
  const [showPass, setShowPass] = useState(false);
  const [showconfirmPass, setShowconfirmPass] = useState(false);
  return (
    <View>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.loginContainer}>
          <View style={styles.loginImage}>
            <Image
              source={{
                uri: 'https://us.123rf.com/450wm/nattyblissful/nattyblissful2007/nattyblissful200700051/151543277-unhappy-man-near-computer-forgot-account-login-and-password-flat-vector-male-character-design.jpg?ver=6',
              }}
              style={styles.PageImage}></Image>
          </View>
          <View style={styles.secondPart}>
            <View style={styles.secondCont}>
              <View>
                <View>
                  <Text style={styles.pageHeading}>Reset</Text>
                </View>
                <View>
                  <Text style={styles.pageHeading}>Password</Text>
                </View>
              </View>
              <View style={styles.loginForm}>
                <View style={styles.inputFieldContainer}>
                  <FontAwesomeIcon
                    name="lock"
                    size={25}
                    style={[styles.inputIcons, {flex: 0.1}]}
                  />
                  <View style={styles.password}>
                    <TextInput
                      style={styles.inputField}
                      secureTextEntry={!showPass}
                      placeholder="New Password"
                      placeholderTextColor={'#9a9da1'}></TextInput>
                    <Pressable onPress={() => setShowPass(!showPass)}>
                      <FontAwesomeIcon
                        name={showPass ? 'eye' : 'eye-slash'}
                        size={25}
                        style={[styles.inputIcons, {marginRight: 0}]}
                      />
                    </Pressable>
                  </View>
                </View>
                <View style={styles.inputFieldContainer}>
                  <FontAwesomeIcon
                    name="lock"
                    size={25}
                    style={[styles.inputIcons, {flex: 0.1}]}
                  />
                  <View style={styles.password}>
                    <TextInput
                      style={styles.inputField}
                      secureTextEntry={!showconfirmPass}
                      placeholder="Confirm new password"
                      placeholderTextColor={'#9a9da1'}></TextInput>
                    <Pressable
                      onPress={() => setShowconfirmPass(!showconfirmPass)}>
                      <FontAwesomeIcon
                        name={showconfirmPass ? 'eye' : 'eye-slash'}
                        size={25}
                        style={[styles.inputIcons, {marginRight: 0}]}
                      />
                    </Pressable>
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
  );
};

export default ResetPass;

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
