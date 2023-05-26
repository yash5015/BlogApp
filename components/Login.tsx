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
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontWeight} from './FontWeight';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
const Login = () => {
  const navigation = useNavigation();
  const [GoogleUserData, setGoogleUserData] = useState('');
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const googleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      //   setState({ userInfo });
      console.log('userInfo', {userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(error);
      } else {
        // some other error happened
        console.log(error);
      }
    }
  };

  return (
    <KeyboardAwareScrollView>
      <View>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.loginContainer}>
            <View style={styles.loginImage}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000',
                }}
                style={styles.PageImage}></Image>
            </View>
            <View style={styles.secondPart}>
              <View style={styles.secondCont}>
                <Text style={styles.pageHeading}>Login</Text>
                <View style={styles.loginForm}>
                  <View style={styles.inputFieldContainer}>
                    <Text style={styles.atRate}>@</Text>
                    <View style={styles.email}>
                      <TextInput
                        style={styles.inputField}
                        placeholder="Email Id"
                        placeholderTextColor={'#9a9da1'}></TextInput>
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
                        secureTextEntry={true}
                        placeholder="Password"
                        placeholderTextColor={'#9a9da1'}></TextInput>
                      <FontAwesomeIcon
                        name="eye-slash"
                        size={25}
                        style={[styles.inputIcons, {marginRight: 0}]}
                      />
                    </View>
                  </View>
                  <View style={styles.Termcond}>
                    <Text style={styles.termText}>
                      <Text
                        onPress={() => {
                          navigation.navigate('ForgotPass');
                        }}
                        style={styles.highlight}>
                        {' '}
                        Forgot Password?
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.signButton}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('Interest');
                      }}
                      style={styles.continueButton}>
                      <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.seperatorContainer}>
                    <View style={styles.seperator}></View>
                    <Text
                      style={{
                        color: 'lightgrey',
                        fontWeight: '500' as FontWeight,
                        marginHorizontal: 10,
                      }}>
                      OR
                    </Text>
                    <View style={styles.seperator}></View>
                  </View>

                  <View style={styles.signButton}>
                    <TouchableOpacity
                      style={styles.GoogleButton}
                      onPress={() => {
                        googleLogin();
                      }}>
                      <Image
                        style={styles.googleIconBtn}
                        source={{
                          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
                        }}></Image>

                      <View style={styles.loginoption}>
                        <Text style={styles.GooglebtnText}>
                          Login with Google
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.signButton}>
                    <TouchableOpacity
                      style={styles.GoogleButton}
                      // onPress={() => {
                      //   FaceBookLogin()
                      //     .then(res => {
                      //       console.log(res);
                      //       setFBUserData(res.data);
                      //     })
                      //     .catch(error =>
                      //       console.log('facebook login error-', error),
                      //     );
                      // }}
                    >
                      <Image
                        style={styles.googleIconBtn}
                        source={{
                          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
                        }}></Image>

                      <View style={styles.loginoption}>
                        <Text style={styles.GooglebtnText}>
                          Login with Facebook
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.lastText}>
                  <Text style={styles.termText}>
                    New to Logistics?{' '}
                    <Text
                      onPress={() => {
                        navigation.navigate('Signup');
                      }}
                      style={styles.highlight}>
                      Register
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {flex: 1},
  loginContainer: {height: '100%', paddingHorizontal: 30, paddingTop: 30},
  loginImage: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  PageImage: {
    width: '100%',
    aspectRatio: 1.1,
    resizeMode: 'contain',
  },
  secondPart: {
    flex: 0.7,
    // backgroundColor: 'yellow',
  },
  secondCont: {
    height: '100%',
    justifyContent: 'space-evenly',
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
    // alignSelf: 'center',
    // marginRight: 20,
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputIcons: {
    alignSelf: 'center',
    color: 'lightgrey',
    // marginRight: 20,
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
    // borderBottomWidth: 1,
    borderColor: 'lightgrey',
    flexGrow: 1,
  },
  Termcond: {marginVertical: 20, width: '100%'},
  termText: {
    alignSelf: 'flex-end',
  },
  highlight: {
    color: 'blue',
    fontWeight: '500' as FontWeight,
    fontSize: 15,
  },
  seperatorContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  seperator: {
    borderWidth: 0.5,
    height: 1,
    alignSelf: 'center',
    flexGrow: 1,
    borderColor: 'lightgrey',
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
    // fontWeight: '700' as FontWeight,
  },
  GoogleButton: {
    backgroundColor: '#e8e8e8',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row',
    width: '100%',
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500' as FontWeight,
  },
  googleIconBtn: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
  loginoption: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  GooglebtnText: {
    fontSize: 16,
    color: '#3c3c3da9',
    fontWeight: '500' as FontWeight,
    // left: '50%',
  },

  lastText: {
    alignSelf: 'center',
  },
});
