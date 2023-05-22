import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {FontWeight} from '../FontWeight';
import {useNavigation} from '@react-navigation/native';
const Card = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details');
      }}>
      <View style={styles.card}>
        <View style={styles.cardImg}>
          <Image
            source={{
              uri: 'https://preview.redd.it/fluent-ios-16-wallpapers-v0-ow9nq73mbyb91.png?width=640&crop=smart&auto=webp&s=8ecc1b512d817a488c6fef988b8e9e876c3ea1cb',
            }}
            style={styles.img}></Image>
        </View>
        <View style={styles.Blogbody}>
          <Text style={styles.blogTitle}>Technology</Text>
          <Text style={styles.heading}>
            World's loudest smartphone introduced
          </Text>
          <View style={styles.iconRow}>
            <View style={styles.iconGrp}>
              <AntIcon name="hearto" />
              <Text style={styles.supText}>2.5k</Text>
            </View>
            <View style={styles.iconGrp}>
              <FontAwesomeIcon name="comment" />
              <Text style={styles.supText}>150</Text>
            </View>
            <View style={styles.iconGrp}>
              <FontAwesomeIcon name="bookmark-o" />
              <Text style={styles.supText}>150</Text>
            </View>
            <View style={styles.iconGrp}>
              <FontAwesomeIcon name="share" />
              <Text style={styles.supText}>150</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 10,
    height: 120,
  },
  cardImg: {
    flex: 0.3,
    borderRadius: 15,
    marginRight: 15,
    overflow: 'hidden',
    backgroundColor: 'blue',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  Blogbody: {
    paddingVertical: 15,
    flex: 0.7,
    rowGap: 10,
  },
  blogTitle: {
    color: 'green',
    fontWeight: '700' as FontWeight,
  },
  heading: {
    fontWeight: '700' as FontWeight,
    fontSize: 15,
    color: '#000',
  },
  iconRow: {
    flexDirection: 'row',
  },
  iconGrp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
    gap: 5,
  },
  supText: {
    fontWeight: '800' as FontWeight,
    color: '#000',
    fontSize: 12,
  },
});
