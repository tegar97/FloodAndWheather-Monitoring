import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import BaseView from '../component/baseView';
import {LineTop} from '../Constant/Icons';
import {Font} from '../Constant/Font';
import Button from '../component/Button';
function SplashScreen({navigation}) {
  const [nextScreen, setNextScreen] = useState(false);
  const screenOne = () => {
    return (
      <View style={styles.SplashScreenContainer}>
        <View style={{marginBottom: 20}}>
          <Image
            source={require('./../assets/image/carbon_flood.png')}
            style={{width: 150, height: 150}}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            width: '85%',
            color: '#fff',
            ...Font.h1,
          }}>
          Pendeteksi Banjir Realtime
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 15,
            color: '#ffff',
            ...Font.body,
          }}>
          Dapatkan info ketinggian air disekitar wilayah anda ,dengan ini anda
          bisa lebih waspada jika terjadi banjir
        </Text>
        <View style={{marginTop: 40, width: '50%', justifyContent: 'center'}}>
          <Button onPress={() => setNextScreen(true)}>Next</Button>
        </View>
      </View>
    );
  };

  const screenTwo = () => {
    return (
      <View style={styles.SplashScreenContainer}>
        <View>
          <Image
            source={require('./../assets/image/wheatherSun.png')}
            style={{width: 150, height: 150}}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            width: '85%',
            color: '#fff',
            ...Font.h1,
          }}>
          Ramalan Cuaca disekitar anda{' '}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 15,
            color: '#ffff',
            ...Font.body,
          }}>
          Ingin kelur tapi takut hujan ? tenang dengan ramalan cuaca dari kami
          anda bisa mendapatkan informasi kapan akan hujan
        </Text>
        <View style={{marginTop: 40, width: '50%', justifyContent: 'center'}}>
          <Button onPress={() => navigation.navigate('Home')}>
            Get Started
          </Button>
        </View>
      </View>
    );
  };
  return (
    <BaseView
      containerStyle={{paddingTop: 32, paddingLeft: 23, paddingRight: 23}}>
      {!nextScreen ? screenOne() : screenTwo()}
    </BaseView>
  );
}

const styles = StyleSheet.create({
  SplashScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SplashScreen;
