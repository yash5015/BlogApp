import {StyleSheet, Text, Image, View, ScrollView} from 'react-native';
import React from 'react';
import {Appbar, Chip} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {FontWeight} from '../FontWeight';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const Deatils = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content
          title="Details"
          titleStyle={{fontWeight: '700' as FontWeight, fontSize: 19}}
        />
      </Appbar.Header>
      <View style={styles.blog}>
        <View style={styles.headBar}>
          <View style={styles.user}>
            <Image
              style={{
                borderRadius: 50,
                width: 25,
                height: 25,
              }}
              source={{
                uri: 'https://media.istockphoto.com/id/155431546/photo/young-man-profile.jpg?s=612x612&w=0&k=20&c=ptdl8HgleBpK7kECIeEQORphqysBlsSOouDAEwhjIpY=',
              }}></Image>
            <Text style={styles.name}>CoinGape</Text>
            <Text style={styles.dot}>.</Text>
            <Text style={styles.follow}>Follow</Text>
          </View>
          <FontAwesomeIcon name="bookmark-o" color="grey" size={25} />
        </View>
        <View>
          <Text style={styles.heading}>
            Apple will announce ios 14.3 in December end 2022
          </Text>
        </View>

        <View style={styles.iconRow}>
          <View style={styles.iconGrp}>
            <AntIcon name="hearto" size={25} color="blue" />
            <Text style={styles.supText}>2.5k</Text>
          </View>
          <View style={styles.iconGrp}>
            <FontAwesomeIcon name="comment" size={25} color="blue" />
            <Text style={styles.supText}>150</Text>
          </View>

          <View style={styles.iconGrp}>
            <FontAwesomeIcon name="share" size={25} color="blue" />
            <Text style={styles.supText}>150</Text>
          </View>
        </View>

        <View style={styles.carousel}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
            }}
            source={{
              uri: 'https://i.pcmag.com/imagery/articles/00vBaknNiRKkyMrpVm36ZqH-1..v1602624385.jpg',
            }}></Image>
        </View>
        <View style={{gap: 10}}>
          <View style={styles.chipsCont}>
            <Chip
              style={styles.chipStyle}
              textStyle={{color: 'blue'}}
              compact={true}>
              #IOS
            </Chip>
            <Chip
              style={styles.chipStyle}
              textStyle={{color: 'blue'}}
              compact={true}>
              #Blogs
            </Chip>
            <Chip
              style={styles.chipStyle}
              textStyle={{color: 'blue'}}
              compact={true}>
              #Apple
            </Chip>
          </View>
        </View>
        <View style={styles.textbody}>
          <Text style={styles.textstyl}>
            So we spend another three weeks making those decisions. I can feel
            you screaing at me. "Come on, man! There is no way it takes there
            weeks to pick those libraries!"
          </Text>
          <Text style={styles.textstyl}>
            Well... welcome to enterprise projects. There are many decisions.
            For each one, you have to create decision criteria, do research,
            validate findings, docyment everything in the decision log, and keep
            libraries up to date. It takes a crazy amount of time, and it is not
            even fun.
          </Text>
          <Text style={styles.textstyl}>
            And I am not even cosidering the time that each projects. There are
            many decisions. For each one, you have to create decision criteria,
            do research, validate findings, docyment everything in the decision
            log, and keep libraries up to date. It takes a crazy amount of time,
            and it is not even fun.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Deatils;

const styles = StyleSheet.create({
  headBar: {
    width: '100%',
    // height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  name: {
    fontWeight: '800' as FontWeight,
    fontSize: 17,
    color: '#000',
  },
  dot: {
    color: 'blue',
    fontWeight: '900' as FontWeight,
    fontSize: 18,
    lineHeight: 15,
  },
  follow: {
    color: 'blue',
    fontWeight: '600' as FontWeight,
  },
  heading: {
    fontWeight: '800' as FontWeight,
    fontSize: 25,
    color: 'black',
    marginVertical: 20,
  },
  blog: {
    padding: 20,
  },
  iconRow: {
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
    fontWeight: '700' as FontWeight,
    color: '#000',
    fontSize: 17,
  },

  carousel: {
    width: '100%',
    height: 200,
    marginVertical: 20,
  },
  chipsCont: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 13,
    columnGap: 10,
  },
  chipStyle: {
    borderRadius: 10,
    marginBottom: 20,
  },
  textbody: {
    rowGap: 20,
  },
  textstyl: {
    // rowGap: 20,
    fontSize: 15,
    lineHeight: 26,
  },
});
