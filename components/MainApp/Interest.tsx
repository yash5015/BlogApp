import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BoxShadow} from 'react-native-shadow';
import DropShadow from 'react-native-drop-shadow';
import {ScrollView} from 'react-native-virtualized-view';
import React, {useState} from 'react';
import {Appbar, Button, Checkbox} from 'react-native-paper';

import {FontWeight} from '../FontWeight';
import AntIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('window');
const Interest = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [Liked, setLiked] = useState([]);
  const [startLike, setStartLike] = useState(false);

  const ViewLike = id => {
    return Liked.includes(id);
  };
  const handleLike = id => {
    if (!Liked.includes(id)) {
      setLiked([...Liked, id]);
    } else {
      const idx = Liked.indexOf(id);
      Liked.splice(idx, 1);
      setLiked([...Liked]);
    }
  };
  const shadowOpt = {
    width: width,
    height: 0,
    color: '#fff',
    border: 10,
    // radius: 0,
    x: 0,
    y: 0,
    side: 'top',
    inset: 'true',

    // style: {backgroundColor: 'yellow'},
  };
  const InterestData = [
    {
      id: 1,
      type: 'Pregnancy',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 2,
      type: 'Moms Clubs',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 3,
      type: 'Health & Fitness',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 4,
      type: 'Beauty & Style',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 5,
      type: 'Family Life',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 6,
      type: 'Love & Relationship',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 7,
      type: 'Entertainment',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 8,
      type: 'Mental HEalth & Support',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 9,
      type: 'Sports',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
    {
      id: 10,
      type: 'Education',
      img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy25ElFkzVV4j3fQudy3rBcCWOgNFDlaq32A&usqp=CAU`,
    },
  ];
  const renderItems = ({item}) => {
    return (
      <Pressable onPress={() => handleLike(item.id)}>
        <View style={styles.card}>
          <Image
            source={{
              uri: item.img,
            }}
            style={styles.cardImg}
          />
          <View
            style={[
              styles.typeView,
              ViewLike(item.id)
                ? {backgroundColor: 'blue'}
                : {
                    backgroundColor: '#1f2324',
                  },
            ]}>
            <View style={{width: '75%'}}>
              <Text style={styles.typeText}>{item.type}</Text>
            </View>
            {ViewLike(item.id) ? (
              <View style={styles.checkBox}>
                <AntIcon name="checkcircle" size={20} color="#fff" />
              </View>
            ) : null}
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{
          flex: 0.85,
        }}>
        <StatusBar backgroundColor={'blue'}></StatusBar>
        <View>
          <Appbar.Header style={styles.header}>
            <Appbar.BackAction
              onPress={() => {
                navigation.navigate('Login');
              }}
              color="white"
            />
            <Appbar.Content
              title="Pick your interest"
              color="white"
              titleStyle={styles.headerTitle}
            />
          </Appbar.Header>
          <View>
            <Text style={styles.heading}>What are your interests ?</Text>
            <Text style={styles.subHeading}>
              {' '}
              Join Glow million of discussion on every subject
            </Text>
          </View>
          <View style={styles.cardContainer}>
            <FlatList
              numColumns={2}
              data={InterestData}
              renderItem={renderItems}
              keyExtractor={(item, index) => `key-${index}`}
            />
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flex: 0.15,
        }}>
        <BoxShadow setting={shadowOpt}></BoxShadow>
        <DropShadow
          style={{
            shadowColor: '#fff',
            shadowOffset: {
              width: 0,
              height: -40,
            },
            shadowOpacity: 1,
            shadowRadius: 20,
          }}>
          <View
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              backgroundColor: 'white',
            }}>
            <Button
              mode="contained"
              onPress={() => {
                navigation.navigate('HomeMain');
              }}
              buttonColor="blue"
              textColor="white"
              contentStyle={styles.contentBtn}
              style={styles.btn}
              labelStyle={{fontSize: 17}}>
              Continue
            </Button>
          </View>
        </DropShadow>
      </View>
    </View>
  );
};

export default Interest;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'blue',
    fontWeight: '600' as FontWeight,
    fontSize: 14,
  },
  headerTitle: {
    color: 'white',
    fontWeight: '700' as FontWeight,
    fontSize: 20,
  },
  heading: {
    color: 'black',
    fontWeight: '800' as FontWeight,
    fontSize: 25,
    marginVertical: 10,
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    paddingHorizontal: 50,
  },
  cardContainer: {
    paddingVertical: 20,
    // backgroundColor: 'yellow',
    alignItems: 'center',
  },
  card: {
    width: width * 0.44,
    height: 120,
    // borderWidth: 1,
    margin: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  typeView: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    flexDirection: 'row',
    // height: 50,
    // opacity: 0.7,

    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  typeText: {
    fontWeight: '500' as FontWeight,
    fontSize: 15,
    color: '#fff',
  },
  checkBox: {
    // width: 20,
    // height: 20,
    // backgroundColor: 'white',
    // borderRadius: 50,
  },

  contentBtn: {},
  btn: {
    width: '90%',
    alignSelf: 'center',
    // marginVertical: 20,
    height: 48,
    justifyContent: 'center',
    borderRadius: 10,
  },
});
