import React from 'react';
import {Text, View} from 'react-native';
import {HumIcon, WindIcon} from '../Constant/Icons';

function OtherInfo({type, name, value}) {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
      {type === 'Wind' ? <WindIcon /> : <HumIcon />}
      <Text
        style={{
          fontFamily: 'Overpass-Regular',
          fontSize: 16,
          color: '#fff',
          marginLeft: 14.5,
          textShadowColor: 'rgba(0, 0, 0, 0.35)',
          textShadowOffset: {width: 1, height: 2.5},
          textShadowRadius: 20,
        }}>
        {name}
      </Text>
      <Text
        style={{
          fontFamily: 'Overpass-Regular',
          fontSize: 16,
          color: '#fff',
          marginLeft: 14.5,
          textShadowColor: 'rgba(0, 0, 0, 0.35)',
          textShadowOffset: {width: 1, height: 2.5},
          textShadowRadius: 20,
        }}>
        |
      </Text>
      <Text
        style={{
          fontFamily: 'Overpass-Regular',
          fontSize: 16,
          color: '#fff',
          marginLeft: 14.5,
          textShadowColor: 'rgba(0, 0, 0, 0.35)',
          textShadowOffset: {width: 1, height: 2.5},
          textShadowRadius: 20,
        }}>
        {value} {type == 'Wind' ? 'km/h' : '%'}
      </Text>
    </View>
  );
}

export default OtherInfo;
