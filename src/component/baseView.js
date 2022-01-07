import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {LineTop} from '../Constant/Icons';
import {LineBottom} from '../Constant/Icons';
function BaseView({
  containerStyle,
  color1 = 'rgba(71, 191, 223, 1)',
  children,
}) {
  return (
    <View style={styles.BaseViewContainer}>
      <LinearGradient
        colors={[color1, 'rgba(74, 145, 255, 1)']}
        start={{x: 1.3, y: 0.1}}
        end={{x: 1, y: 1}}
        style={{
          flex: 1,
          position: 'relative',

          ...containerStyle,
        }}>
        <LineTop
          style={{
            position: 'absolute',
            flex: 1,
            width: 297,
            top: 0,
            right: 0,
          }}
        />
        <LineBottom
          style={{
            position: 'absolute',
            flex: 1,
            width: '100%',
            top: 80,
            left: 0,
          }}
        />

        {children}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  BaseViewContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  linearGradient: {},
});
export default BaseView;
