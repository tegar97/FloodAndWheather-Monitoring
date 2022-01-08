import moment from 'moment';
import React from 'react';
import {Image, Text, View} from 'react-native';

function ForecastPerDay({temp, icon, date}) {
  console.log('Iconnn', date);
  return (
    <View
      style={{
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
      }}>
      <Text
        style={{
          fontFamily: 'Overpass-Bold',
          fontSize: 20,
          color: '#fff',
          textShadowColor: 'rgba(0, 0, 0, 0.2)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 0.1,
        }}>
        {moment(date).format('MMM Do')}
      </Text>
      <View style={{width: 50, height: 50}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{
            uri: `https://developer.accuweather.com/sites/default/files/${
              icon?.Icon >= 10 ? `${icon?.Icon}` : `0${icon?.Icon}`
            }-s.png`,
          }}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Overpass-Regular',
          fontSize: 20,
          color: '#fff',
          textShadowColor: 'rgba(0, 0, 0, 0.1)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 0.1,
        }}>
        {temp.Minimum.Value} - {temp.Maximum.Value}
      </Text>
    </View>
  );
}

export default ForecastPerDay;
