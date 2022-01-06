import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Left} from '../Constant/Icons';
function NavBottom({navigation}) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('forecast')}
      style={{
        backgroundColor: '#ffff',
        position: 'absolute',
        borderRadius: 13,
        paddingBottom: 15,
        paddingTop: 15,
        paddingLeft: 35,
        paddingRight: 35,
        bottom: 40,
        alignSelf: 'center',
        shadowColor: 'rgba(0,0,0,.5)',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.3,

        elevation: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#444E72',
            fontFamily: 'Overpass-Regular',
            fontSize: 15,
          }}>
          Forecast Report
        </Text>
        <Left />
      </View>
    </TouchableOpacity>
  );
}

export default NavBottom;
