import axios from 'axios';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import BaseView from '../component/baseView';
import {Right, Setting} from '../Constant/Icons';

function FloodLevel({navigation}) {
  const [distanceLevel, setDistanceLevel] = React.useState(0);
  const [heightObjectTesting, setHeightObjectTesting] = React.useState(0);

  // React.useEffect(() => {
  //   const getFloodLevel = async () => {
  //     await axios
  //       .get(
  //         'https://api.thingspeak.com/channels/1627410/feeds.json?api_key=GP1B7XTKW3OBWR1N&results=2',
  //       )
  //       .then(res => {
  //         setDistanceLevel(res.data.feeds[1].field1);
  //       });
  //   };
  //   getFloodLevel();
  // }, []);

  return (
    <BaseView
      color1={
        heightObjectTesting - distanceLevel >= 3
          ? 'rgba(255, 168, 0, 1)'
          : 'rgba(71, 191, 223, 1)'
      }>
      <View style={{paddingTop: 32, paddingLeft: 23, paddingRight: 23}}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('forecast')}
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <Right style={{width: 35, height: 45}} />
            <Text
              style={{
                marginLeft: 10,
                fontFamily: 'Overpass-Bold',
                fontSize: 20,
                color: '#fff',
                textShadowColor: 'rgba(0, 0, 0, 0.5)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 0.1,
              }}>
              Back
            </Text>
          </TouchableOpacity>
          <Setting style={{width: 25, height: 35}} />
        </View>
        <View
          style={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.3);',
            alignItems: 'center',
            borderRadius: 13,
            paddingBottom: 25,
            paddingTop: 25,
            marginTop: 40,
            marginBottom: 15,
          }}>
          <Text
            style={{
              color: '#ffff',
              fontFamily: 'Overpass-Regular',
              fontSize: 16,
              textShadowColor: 'rgba(0, 0, 0, 0.25)',
              textShadowOffset: {width: 1, height: 2.5},
              textShadowRadius: 0.1,
            }}>
            Jalan Panyawangan 19
          </Text>
          <Image
            source={require('./../assets/image/carbon_flood.png')}
            style={{width: 120, height: 120, marginTop: 15, marginBottom: 15}}
          />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Text
              style={{
                color: '#ffff',
                fontFamily: 'Overpass-Medium',
                fontSize: 20,
                textShadowColor: 'rgba(0, 0, 0, 0.25)',
                textShadowOffset: {width: 1, height: 2.5},
                textShadowRadius: 0.1,
              }}>
              Ketinggian Air
            </Text>
            <Text
              style={{
                color: '#ffff',
                fontFamily: 'Overpass-SemiBold',
                fontSize: 35,
                textShadowColor: 'rgba(0, 0, 0, 0.25)',
                textShadowOffset: {width: 1, height: 2.5},
                textShadowRadius: 0.1,
              }}>
              {heightObjectTesting - distanceLevel <= 0
                ? 0
                : heightObjectTesting - distanceLevel}{' '}
              cm
            </Text>
          </View>
        </View>
      </View>
    </BaseView>
  );
}

export default FloodLevel;
