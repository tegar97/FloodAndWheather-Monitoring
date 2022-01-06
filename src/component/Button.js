import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

function Button({onPress, children}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 13,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 15,
        },
        shadowOpacity: 0.1,
        shadowRadius: 16.0,

        elevation: 6,
      }}>
      <Text
        style={{
          color: '#11172C',
          fontFamily: 'Overpass-Regular',
          fontSize: 15,
        }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
