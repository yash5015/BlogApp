import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {FontWeight} from '../FontWeight';
import {useNavigation} from '@react-navigation/native';
const CardComp = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigation.navigate('Details');
      }}>
      <View style={styles.card}>
        <View style={styles.name}>
          <View style={{flexDirection: 'row', columnGap: 3}}>
            <Image
              style={{
                borderRadius: 50,
                width: 20,
                height: 20,
              }}
              source={{
                uri: 'https://media.istockphoto.com/id/155431546/photo/young-man-profile.jpg?s=612x612&w=0&k=20&c=ptdl8HgleBpK7kECIeEQORphqysBlsSOouDAEwhjIpY=',
              }}></Image>
            <Text style={styles.user}>Jason Bruno</Text>
          </View>
          <Text style={styles.time}>22 min ago</Text>
        </View>
        <View style={styles.img}>
          <Image
            style={styles.phoneImg}
            source={{
              uri: 'https://i.pcmag.com/imagery/articles/00vBaknNiRKkyMrpVm36ZqH-1..v1602624385.jpg',
            }}></Image>
        </View>
        <View style={styles.desc}>
          <Text style={styles.descText}>
            Apple will announce ios 14.3 in December end 2022
          </Text>
        </View>
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
    </Pressable>
  );
};

export default CardComp;

const styles = StyleSheet.create({
  card: {
    rowGap: 10,
    marginRight: 10,
    borderWidth: 0.2,
    borderRadius: 6,
    padding: 8,
    width: 250,
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {fontWeight: '700' as FontWeight, fontSize: 15, color: '#000'},
  time: {},
  img: {
    width: '100%',
    height: 140,
    alignSelf: 'center',

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  phoneImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  desc: {},
  descText: {
    fontWeight: '700' as FontWeight,
    fontSize: 15,
    color: '#000',
  },

  iconRow: {
    borderTopWidth: 0.2,
    borderColor: 'lightgrey',
    flexDirection: 'row',
  },
  iconGrp: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    gap: 5,
  },
  supText: {
    fontWeight: '800' as FontWeight,
    color: '#000',
    fontSize: 12,
  },
});
