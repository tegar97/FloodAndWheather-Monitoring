import axios from 'axios';
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import BaseView from '../component/baseView';
import ForeCastPerHour from '../component/ForeCastPerHour';
import {Right, Setting} from '../Constant/Icons';
import Moment from 'react-moment';
import moment from 'moment';
import ForecastPerDay from '../component/ForecastPerDay';
function Forecast({navigation}) {
  const [forecastHour, setforecastHour] = React.useState([]);
  const [forecastDays, setforecastDays] = React.useState([]);
  const [ErrorMessage, setErrorMessage] = React.useState(null);

  React.useState(() => {
    const getForecastPerDays = async () => {
      axios
        .get(
          'http://dataservice.accuweather.com/forecasts/v1/daily/5day/202621?apikey=l4mG8tiYRokPL22IcqO3kxXY6CHoX62t&details=true&metric=true',
        )
        .then(res => {
          setforecastDays(res.data.DailyForecasts);
        })
        .catch(err => {
          setErrorMessage(err);
        });
    };
    getForecastPerDays();
  }, []);
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
            fontFamily: 'Overpass-SemiBold',
            fontSize: 20,
            color: '#fff',
            textShadowColor: 'rgba(0, 0, 0, 0.3)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 0.1,
          }}>
          Hari ini
        </Text>
        <Text
          style={{
            fontFamily: 'Overpass-Regular',
            fontSize: 18,
            color: '#fff',
          }}>
          {moment(new Date()).format('MMM  do')}
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: 25}}>
        {forecastHour?.data
          ?.filter((data, idx) => idx <= 5)
          .map((data, idx) => (
            <ForeCastPerHour data={data} key={idx} />
          ))}
      </View>

      <View style={{marginTop: 20}}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('FloodLevel')}>
            <Text
              style={{
                fontFamily: 'Overpass-SemiBold',
                fontSize: 20,
                color: '#fff',
                textShadowColor: 'rgba(0, 0, 0, 0.2)',
                textShadowOffset: {width: -1, height: 1},
                textShadowRadius: 0.1,
              }}>
              Monitoring Ketinggian Banjir
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{backgroundColor: 'rgba(255, 255, 255, 0.3)', width: '50%'}}>
          <Text style={{color: '#ffff'}}>Daerah</Text>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: 'column'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginTop: 40,
          }}>
          <Text
            style={{
              fontFamily: 'Overpass-SemiBold',
              fontSize: 20,
              color: '#fff',
              textShadowColor: 'rgba(0, 0, 0, 0.3)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 0.1,
            }}>
            Next Forecast
          </Text>
          <Text
            style={{
              fontFamily: 'Overpass-Regular',
              fontSize: 18,
              color: '#fff',
            }}></Text>
        </View>
        <View style={{height: 150}}>
          <ScrollView>
            <View style={{width: '100%', marginTop: 20}}>
              {forecastDays
                ? forecastDays.map(data => (
                    <ForecastPerDay
                      key={data.date}
                      temp={data.Temperature}
                      icon={data.Day}
                      date={data.Date}
                    />
                  ))
                : 'Loading .....'}
            </View>
          </ScrollView>
        </View>
      </View>
    </BaseView>
  );
}

export default Forecast;
