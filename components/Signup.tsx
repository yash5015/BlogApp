import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {FontWeight} from './FontWeight';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Signup = () => {
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView>
      <View>
        <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.SignUPContainer}>
            <View style={styles.signupImage}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-sitting-near-smartphone_268404-95.jpg?w=360',
                }}
                style={styles.PageImage}></Image>
            </View>
            <View style={styles.secondPart}>
              <View style={styles.secondCont}>
                <Text style={styles.pageHeading}>Sign up</Text>
                <View style={styles.signupForm}>
                  <View style={styles.inputFieldContainer}>
                    <Text style={styles.atRate}>@</Text>
                    <TextInput
                      style={styles.inputField}
                      placeholder="Email Id"
                      placeholderTextColor={'#9a9da1'}></TextInput>
                  </View>
                  <View style={styles.inputFieldContainer}>
                    <FontAwesomeIcon
                      name="user-o"
                      size={25}
                      style={styles.inputIcons}
                    />
                    <TextInput
                      style={styles.inputField}
                      placeholder="Full name"
                      placeholderTextColor={'#9a9da1'}></TextInput>
                  </View>
                  <View style={styles.inputFieldContainer}>
                    <FeatherIcon
                      style={styles.inputIcons}
                      name="phone"
                      size={25}
                    />
                    <TextInput
                      style={styles.inputField}
                      placeholder="Mobile"
                      placeholderTextColor={'#9a9da1'}></TextInput>
                  </View>
                  <View style={styles.Termcond}>
                    <Text style={styles.termText}>
                      By signing up, you're agree to out{' '}
                      <Text style={styles.highlight}>Terms & Conditions </Text>
                      and <Text style={styles.highlight}> Privacy Policy</Text>
                    </Text>
                  </View>
                  <View style={styles.signButton}>
                    <TouchableOpacity style={styles.continueButton}>
                      <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.lastText}>
                  <Text style={styles.termText}>
                    Joined us before?{' '}
                    <Text
                      onPress={() => navigation.navigate('Login')}
                      style={styles.highlight}>
                      Login
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

export default Signup;

const styles = StyleSheet.create({
  SignUPContainer: {flex: 1, paddingHorizontal: 30},
  signupImage: {
    flex: 0.3,
  },
  PageImage: {
    width: '100%',
    aspectRatio: 1.3,
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
  signupForm: {
    gap: 15,
  },
  inputFieldContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  atRate: {
    fontWeight: '700' as FontWeight,
    fontSize: 25,
    color: 'lightgrey',
    alignSelf: 'center',
    marginRight: 20,
  },
  inputIcons: {alignSelf: 'center', color: 'lightgrey', marginRight: 20},
  inputField: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    flexGrow: 1,
  },
  Termcond: {marginVertical: 20},
  termText: {},
  highlight: {
    color: 'blue',
  },
  signButton: {
    color: 'blue',
    // paddingVertical: 10,
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
  btnText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500' as FontWeight,
  },

  lastText: {
    alignSelf: 'center',
    paddingVertical: 10,
  },
});
