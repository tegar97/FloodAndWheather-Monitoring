import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BaseView from '../component/baseView';
import OtherInfo from '../component/otherInfo';
import {MapsIcon, Notif} from '../Constant/Icons';
import GetLocation from 'react-native-get-location';
import axios from 'axios';
import NavBottom from '../component/NavBottom';
function Home({navigation}) {
  const [currentData, setCurrentData] = React.useState([]);
  //   GetLocation.getCurrentPosition({
  //     enableHighAccuracy: true,
  //     timeout: 15000,
  //   })
  //     .then(location => {
  //       console.log(location);
  //     })
  //     .catch(error => {
  //       const {code, message} = error;
  //       console.warn(code, message);
  //     });

  React.useEffect(() => {
    const getCurrentWeather = async () => {
      console.log();
      await axios
        .get(
          'http://dataservice.accuweather.com/currentconditions/v1/202621?apikey=l4mG8tiYRokPL22IcqO3kxXY6CHoX62t&details=true',
        )
        .then(res => {
          setCurrentData(res.data[0]);
          console.log(res.data[0].RelativeHumidity);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getCurrentWeather();
  }, []);
  return (
    <BaseView
      containerStyle={{paddingTop: 32, paddingLeft: 23, paddingRight: 23}}>
      <NavBottom navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <MapsIcon style={{width: 30, height: 30}} />
          <Text
            style={{
              marginLeft: 15,
              fontFamily: 'Overpass-Bold',
              fontSize: 18,
              color: '#fff',
              textShadowColor: 'rgba(0, 0, 0, 0.5)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 0.1,
            }}>
            Bandung
          </Text>
        </View>
        <Notif style={{width: 30, height: 30}} />
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <Image
          source={require('./../assets/image/wheatherSun.png')}
          style={{width: 170, height: 170}}
        />
        <View
          style={{
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.3);',
            alignItems: 'center',
            borderRadius: 13,
            paddingBottom: 25,
            paddingTop: 25,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  color: '#ffff',
                  fontFamily: 'Overpass-Regular',
                  fontSize: 19,
                  textShadowColor: 'rgba(0, 0, 0, 0.25)',
                  textShadowOffset: {width: 1, height: 2.5},
                  textShadowRadius: 0.1,
                }}>
                07 Januari 2020
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  alignSelf: 'center',
                  color: '#ffff',
                  fontFamily: 'Overpass-Regular',
                  fontSize: 62,
                  // textShadowColor: 'rgba(0, 0, 0, 0.3)',
                  // textShadowOffset: {width: -2.8, height: 5},
                  // textShadowRadius: 38,
                }}>
                {currentData
                  ? currentData?.ApparentTemperature?.Metric?.Value
                  : 'Loading'}{' '}
                °
              </Text>
              <Text
                style={{
                  color: '#ffff',
                  fontFamily: 'Overpass-Regular',
                  fontSize: 19,
                  textShadowColor: 'rgba(0, 0, 0, 0.25)',
                  textShadowOffset: {width: 1, height: 2.5},
                  textShadowRadius: 0.1,
                }}>
                {currentData ? currentData?.WeatherText : 'Loading ...'}
              </Text>
            </View>
            <View style={{marginTop: 15}}>
              {currentData ? (
                <>
                  <OtherInfo
                    name="Hum"
                    type="Hum"
                    value={currentData?.RelativeHumidity}
                  />
                  <OtherInfo
                    name="Wind"
                    type="Wind"
                    value={currentData?.Wind?.Speed?.Metric?.Value}
                  />
                </>
              ) : (
                'Loading ....'
              )}
            </View>
          </View>
        </View>
      </View>
    </BaseView>
  );
}

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Home;
