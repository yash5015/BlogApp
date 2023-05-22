import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {createRef, useRef, useState} from 'react';
import {Appbar, Button, Chip} from 'react-native-paper';
import {FontWeight} from '../FontWeight';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RichEditor} from 'react-native-pell-rich-editor';

import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import RichTextEditor from './RichTextEditor';
import {ScrollView} from 'react-native-virtualized-view';

const CloseBtn = () => {
  return (
    <View style={styles.crossChipCircle}>
      <AntIcon name="plus" style={styles.chipcross} />
    </View>
  );
};
const UploadBlog = () => {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const navigation = useNavigation();
  const MyRichTextRef = useRef();
  const DisableKeyboard = () => {
    console.log('keyboardshown', keyboardShown);
    if (keyboardShown) {
      MyRichTextRef.current?.blurContentEditor();
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <KeyboardAwareScrollView
        onKeyboardDidShow={() => {
          setKeyboardShown(true);
          // console.log('shown keyboard');
        }}
        onKeyboardDidHide={() => {
          {
            setKeyboardShown(false);
            // console.log('hide keyboard');
          }
        }}>
        <>
          <Appbar.Header>
            <Appbar.BackAction
              onPress={() => {
                navigation.navigate('HomeMain');
              }}
            />
            <Appbar.Content
              title="Upload Blog"
              titleStyle={{fontWeight: '700' as FontWeight, fontSize: 19}}
            />
          </Appbar.Header>

          <View style={styles.mainCopnt}>
            <View
              style={styles.upCont}
              onTouchEnd={() => {
                DisableKeyboard();
              }}
              // onKeyboardDidShow={() => setKeyboardShown(true)}
              // onKeyboardDidHide={() => {
              //   setKeyboardShown(false);
              // }}
            >
              <Text style={styles.otherImgText}>Upload Thumbnail</Text>
              <View style={styles.ImgCont}>
                <View style={styles.crossCircle}>
                  <AntIcon name="plus" style={styles.cross} />
                </View>
                <Image
                  style={styles.phoneImg}
                  source={{
                    uri: 'https://i.pcmag.com/imagery/articles/00vBaknNiRKkyMrpVm36ZqH-1..v1602624385.jpg',
                  }}></Image>
              </View>
              <Text style={styles.tagText}>Your title</Text>
              <View style={styles.titleBox}>
                <Text style={styles.titleText}>
                  He Was Ranked Among Forbes 100 Richest |{' '}
                </Text>
              </View>
              <Text style={styles.tagText}>Tags</Text>
              <View style={styles.TagBox}>
                <View style={styles.chipsCont}>
                  <Chip
                    style={styles.chipStyleBlue}
                    textStyle={{color: 'blue'}}>
                    #Blog
                    {/* <AntIcon
                name="close"
                size={20}
                color="blue"
                style={styles.icon}
              /> */}
                  </Chip>
                  <Chip
                    style={styles.chipStyleBlue}
                    textStyle={{color: 'blue'}}
                    compact={true}>
                    #IOS
                  </Chip>
                  <Chip
                    style={styles.chipStyleBlue}
                    textStyle={{color: 'blue'}}
                    compact={true}>
                    #Rank
                  </Chip>
                </View>
              </View>
              <Text style={styles.descText}>Description</Text>
            </View>
            <View style={styles.TextEditor}>
              <RichTextEditor Myref={MyRichTextRef} />
              {/* Myref={RichText} */}
            </View>
            <View
              style={styles.downCont}
              onTouchEnd={() => {
                DisableKeyboard();
              }}

              // onKeyboardDidShow={() => setKeyboardShown(true)}
              // onKeyboardDidHide={() => {
              //   setKeyboardShown(false);
              // }}
            >
              <Text style={styles.otherImgText}>Other Images</Text>
              <View style={styles.otherImagesCont}>
                <View style={styles.ImgCont}>
                  <View style={styles.crossCircle}>
                    <AntIcon name="plus" style={styles.cross} />
                  </View>
                  <Image
                    style={styles.phoneImg}
                    source={{
                      uri: 'https://i.pcmag.com/imagery/articles/00vBaknNiRKkyMrpVm36ZqH-1..v1602624385.jpg',
                    }}></Image>
                </View>
                <View style={styles.ImgCont}>
                  <View style={styles.crossCircle}>
                    <AntIcon name="plus" style={styles.cross} />
                  </View>
                  <Image
                    style={styles.phoneImg}
                    source={{
                      uri: 'https://i.pcmag.com/imagery/articles/00vBaknNiRKkyMrpVm36ZqH-1..v1602624385.jpg',
                    }}></Image>
                </View>
                <View style={styles.ImgCont}>
                  <View style={styles.crossCircle}>
                    <AntIcon name="plus" style={styles.cross} />
                  </View>
                  <Image
                    style={styles.phoneImg}
                    source={{
                      uri: 'https://i.pcmag.com/imagery/articles/00vBaknNiRKkyMrpVm36ZqH-1..v1602624385.jpg',
                    }}></Image>
                </View>
              </View>
              <View style={styles.btns}>
                <Button
                  icon="pencil"
                  mode="outlined"
                  buttonColor="#E7F1FD"
                  textColor="blue"
                  style={{
                    borderRadius: 10,
                    width: '48%',
                    borderColor: '#E1A3B1',
                  }}
                  onPress={() => console.log('Save Draft Pressed')}>
                  Save Draft
                </Button>
                <Button
                  icon="check"
                  buttonColor="blue"
                  style={{
                    borderRadius: 10,
                    width: '48%',
                  }}
                  mode="contained"
                  onPress={() => console.log('Publish Pressed')}>
                  Publish
                </Button>
              </View>
            </View>
          </View>
        </>
      </KeyboardAwareScrollView>
    </KeyboardAvoidingView>
  );
};

export default UploadBlog;

const styles = StyleSheet.create({
  mainCopnt: {
    padding: 20,
    rowGap: 18,
    backgroundColor: '#fff',
  },
  upCont: {
    rowGap: 18,
  },
  downCont: {
    rowGap: 18,
  },

  ImgCont: {
    width: 78,
  },
  crossCircle: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 50,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    right: 0,
    top: -5,
  },
  cross: {
    color: 'white',
    transform: [{rotate: '45deg'}],
    fontSize: 15,
  },

  phoneImg: {
    width: 70,
    aspectRatio: 1,
    borderRadius: 10,
  },
  tagText: {
    color: '#000',
    fontWeight: '700' as FontWeight,
    fontSize: 16,
  },
  titleBox: {
    borderWidth: 0.7,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 8,
  },
  titleText: {
    color: '#000',
    fontWeight: '500' as FontWeight,
    fontSize: 16,
  },
  TagBox: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    padding: 8,
  },
  chipBx: {
    flexDirection: 'row',
  },
  crossChipCircle: {
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E7F1FD',
  },
  chipcross: {
    color: 'blue',
    transform: [{rotate: '45deg'}],
    fontWeight: '700' as FontWeight,
    fontSize: 16,
  },
  chipsCont: {
    flexDirection: 'row',
    // marginVertical: 10,
  },
  chipStyleBlue: {
    borderRadius: 10,
    marginRight: 10,
  },
  descText: {
    color: '#000',
    fontWeight: '700' as FontWeight,
    fontSize: 16,
  },
  TextEditor: {
    // height: 180,
    borderWidth: 0.6,
    borderColor: 'grey',
    borderRadius: 10,
  },
  otherImgText: {
    color: '#000',
    fontWeight: '700' as FontWeight,
    fontSize: 18,
  },
  otherImagesCont: {
    flexDirection: 'row',
    columnGap: 7,
  },
  btns: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
