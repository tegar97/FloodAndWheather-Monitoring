import React from 'react';
import {Image, Text, View} from 'react-native';
import GenateWheatherIcon from '../util/wheatherIcon';
import {Union} from '../Constant/Icons';
function ForeCastPerHour({data}) {
  const [iconPhrase, setIconPharse] = React.useState(1);

  React.useEffect(() => {
    const iconNumber = GenateWheatherIcon(data.IconPhrase);
    console.log(iconNumber);
    setIconPharse(iconNumber);
  }, [data.IconPhrase]);
  const convertDate = date => {
    const newDate = new Date(date);
    const fixHour = newDate.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });

    return fixHour.substring(0, 5);
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
      }}>
      <Text
        style={{
          fontFamily: 'Overpass-Regular',
          fontSize: 20,
          color: '#fff',
          textShadowColor: 'rgba(0, 0, 0, 0.2)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 0.1,
        }}>
        {data?.Temperature?.Value} °
      </Text>
      <View style={{width: 64, height: 43, marginTop: 15, marginBottom: 15}}>
        <Image
          source={{
            uri: `https://developer.accuweather.com/sites/default/files/${
              data?.WeatherIcon >= 10
                ? `${data?.WeatherIcon}`
                : `0${data?.WeatherIcon}`
            }-s.png`,
          }}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Overpass-Regular',
          fontSize: 20,
          color: '#fff',
          textShadowColor: 'rgba(0, 0, 0, 0.2)',
          textShadowOffset: {width: -1, height: 1},
          textShadowRadius: 0.1,
        }}>
        {convertDate(data.DateTime)}
      </Text>
    </View>
  );
}

export default ForeCastPerHour;
