import {
  StyleSheet,
  Text,
  Image,
  View,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CardComp from './CardComp';
import {Chip, FAB, Searchbar} from 'react-native-paper';
import {FontWeight} from '../FontWeight';
import Card from './Card';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  return (
    <>
      <KeyboardAwareScrollView>
        <View style={{padding: 20}}>
          <View style={styles.header}>
            <View style={styles.dateCont}>
              <Text style={styles.Day}>Today</Text>
              <Text style={styles.date}>Friday, 14 September</Text>
            </View>
            <View style={styles.Avatar}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={{
                  uri: 'https://media.istockphoto.com/id/155431546/photo/young-man-profile.jpg?s=612x612&w=0&k=20&c=ptdl8HgleBpK7kECIeEQORphqysBlsSOouDAEwhjIpY=',
                }}
                resizeMode="cover"
              />
            </View>
          </View>
          <Searchbar
            placeholder="Search here"
            onChangeText={onChangeSearch}
            value={searchQuery}
            traileringIcon={'tune-vertical'}
            style={{
              borderRadius: 6,
              backgroundColor: 'transparent',
              borderWidth: 0.3,
              marginVertical: 20,
            }}
          />
          <View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.subHeading}>Trending Blogs</Text>
              <Text>View All</Text>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginVertical: 20}}>
              <CardComp />
              <CardComp />
              <CardComp />
            </ScrollView>
          </View>
          <View style={styles.cardCont}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.chipsCont}>
              <Chip style={styles.chipStyleBlue} textStyle={{color: '#fff'}}>
                Top Stories
              </Chip>
              <Chip
                style={styles.chipStyleWhite}
                textStyle={{color: '#000'}}
                compact={true}>
                #crypto
              </Chip>
              <Chip
                style={styles.chipStyleWhite}
                textStyle={{color: '#000'}}
                compact={true}>
                #science
              </Chip>
              <Chip
                style={styles.chipStyleWhite}
                textStyle={{color: '#000'}}
                compact={true}>
                #startup
              </Chip>
              <Chip
                style={styles.chipStyleWhite}
                textStyle={{color: '#000'}}
                compact={true}>
                #technology
              </Chip>
              <Chip
                style={styles.chipStyleWhite}
                textStyle={{color: '#000'}}
                compact={true}>
                #education
              </Chip>
              <Chip
                style={styles.chipStyleWhite}
                textStyle={{color: '#000'}}
                compact={true}>
                #politics
              </Chip>
            </ScrollView>

            <Card />
            <Card />
          </View>
        </View>
      </KeyboardAwareScrollView>
      <Pressable
        onPress={() => {
          navigation.navigate('UploadBlog');
        }}>
        <View style={styles.fab}>
          <AntIcon name="plus" style={styles.plus} />
        </View>
      </Pressable>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {flexDirection: 'row', justifyContent: 'space-between'},

  dateCont: {},
  Day: {color: '#000', fontWeight: '900' as FontWeight, fontSize: 25},
  date: {color: 'black', fontWeight: '600' as FontWeight, fontSize: 14},
  Avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
    overflow: 'hidden',
  },
  subHeading: {
    fontWeight: '600' as FontWeight,
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  chipsCont: {
    marginVertical: 10,
  },
  chipStyleBlue: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  chipStyleWhite: {
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  cardCont: {},
  fab: {
    elevation: 10,
    width: 70,
    height: 70,
    borderRadius: 50,
    position: 'absolute',
    right: 15,
    bottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  plus: {
    color: '#fff',
    fontSize: 40,
  },
});
