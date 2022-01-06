import axios from 'axios';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BaseView from '../component/baseView';
import ForeCastPerHour from '../component/ForeCastPerHour';
import {Right, Setting} from '../Constant/Icons';
import Moment from 'react-moment';
function Forecast({navigation}) {
  const [forecastHour, setforecastHour] = React.useState([]);
  React.useState(() => {
    const getForecastPerHour = async () => {
      axios
        .get(
          'http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/202621?apikey=l4mG8tiYRokPL22IcqO3kxXY6CHoX62t&language=en-us&metric=true',
        )
        .then(res => {
          const tempData = [];
          setforecastHour(res);
          //   res.data
          //     .filter((data, idx) => idx <= 6)
          //     .map((data, idx) => {
          //       setforecastHour(data);
          //       console.log(idx, data.DateTime);
          //       const newDate = new Date(data.DateTime);
          //       const fixHour = newDate.toLocaleTimeString('en-US', {
          //         hour: 'numeric',
          //         minute: 'numeric',
          //       });
          //       console.log(fixHour.substring(0, 5));
          //     });
        })
        .catch(err => {
          console.log(err);
        });
    };
    getForecastPerHour();
    console.log(forecastHour);
  }, []);
  return (
    <BaseView
      containerStyle={{
        paddingTop: 32,
        paddingLeft: 23,
        paddingRight: 23,
      }}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
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
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginTop: 40,
          paddingLeft: 15,
          paddingRight: 15,
        }}>
        <Text
          style={{
            fontFamily: 'Overpass-Black',
            fontSize: 20,
            color: '#fff',
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 0.1,
          }}>
          Today
        </Text>
        <Text
          style={{
            fontFamily: 'Overpass-Regular',
            fontSize: 18,
            color: '#fff',
          }}>
          Jan,06{' '}
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 25}}>
        {forecastHour?.data
          ?.filter((data, idx) => idx <= 5)
          .map((data, idx) => (
            <ForeCastPerHour data={data} key={idx} />
          ))}
      </View>
    </BaseView>
  );
}

export default Forecast;
