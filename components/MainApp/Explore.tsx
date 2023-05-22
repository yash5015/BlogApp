import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Appbar, Chip, Searchbar} from 'react-native-paper';
import {FontWeight} from '../FontWeight';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Card from './Card';
import {useNavigation, useRoute} from '@react-navigation/native';
const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <KeyboardAwareScrollView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />

      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              navigation.navigate('HomeMain');
            }}
          />
          <Appbar.Content
            title="Explore"
            titleStyle={{fontWeight: '700' as FontWeight, fontSize: 19}}
          />
        </Appbar.Header>
        <View style={{padding: 14}}>
          <Searchbar
            placeholder="Search here"
            onChangeText={onChangeSearch}
            value={searchQuery}
            traileringIcon={'tune-vertical'}
            style={{
              borderRadius: 6,
              backgroundColor: 'transparent',
              borderWidth: 0.3,
            }}
          />
          <View>
            <View style={{gap: 10, marginVertical: 25}}>
              <Text style={styles.subHeading}>Recent Search</Text>
              <View style={styles.sideText}>
                <Text>Economy news</Text>
                <Text>x</Text>
              </View>
              <View style={styles.sideText}>
                <Text>Business</Text>
                <Text>x</Text>
              </View>
              <View style={styles.sideText}>
                <Text>Crypto markets</Text>
                <Text>x</Text>
              </View>
              <View style={styles.sideText}>
                <Text>Technology news</Text>
                <Text>x</Text>
              </View>
            </View>
            <View style={{gap: 10}}>
              <Text style={styles.subHeading}>Popular Tags</Text>
              <View style={styles.chipsCont}>
                <Chip
                  style={styles.chipStyle}
                  textStyle={{color: 'blue'}}
                  compact={true}>
                  #business
                </Chip>
                <Chip
                  style={styles.chipStyle}
                  textStyle={{color: 'blue'}}
                  compact={true}>
                  #crypto
                </Chip>
                <Chip
                  style={styles.chipStyle}
                  textStyle={{color: 'blue'}}
                  compact={true}>
                  #science
                </Chip>
                <Chip
                  style={styles.chipStyle}
                  textStyle={{color: 'blue'}}
                  compact={true}>
                  #startup
                </Chip>
                <Chip
                  style={styles.chipStyle}
                  textStyle={{color: 'blue'}}
                  compact={true}>
                  #technology
                </Chip>
                <Chip
                  style={styles.chipStyle}
                  textStyle={{color: 'blue'}}
                  compact={true}>
                  #education
                </Chip>
                <Chip
                  style={styles.chipStyle}
                  textStyle={{color: 'blue'}}
                  compact={true}>
                  #politics
                </Chip>
              </View>
            </View>
            <View style={{gap: 10, marginVertical: 25}}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.subHeading}>Trending Blogs</Text>
                <Text>View All</Text>
              </View>
              <View style={styles.cardCont}>
                <Card />
                <Card />
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  subHeading: {
    fontWeight: '600' as FontWeight,
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  sideText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chipsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 13,
    columnGap: 10,
  },
  chipStyle: {
    paddingVertical: 5,
    borderRadius: 30,
  },
  cardCont: {},
});
