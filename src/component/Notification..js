import React from 'react';
import {Text, View} from 'react-native';
import {Close} from '../Constant/Icons';

function Notification() {
  return (
    <View
      style={{
        flex: 1,
        height: '90%',
        backgroundColor: '#fff',
        position: 'absolute',
        width: '100%',
        zIndex: 2,
        bottom: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
      }}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 52,
            height: 3,

            backgroundColor: '#838BAA',
          }}></View>
      </View>
      <View style={{marginTop: 32}}>
        <Text
          style={{
            color: '#444E72',
            fontSize: 25,
            fontFamily: 'Overpass-Black',
          }}>
          Your Notification
        </Text>
      </View>
    </View>
  );
}

export default Notification;
