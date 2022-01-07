import React from 'react';
import {Image, Text, View} from 'react-native';
import GenateWheatherIcon from '../util/wheatherIcon';
function ForeCastPerHour({data}) {
  const [iconPhrase, setIconPharse] = React.useState(1);
  React.useEffect(() => {
    const iconNumber = GenateWheatherIcon(data.IconPhrase);
    console.log(iconNumber);
    setIconPharse(iconNumber);
  }, [data.IconPhrase]);
  console.log(data);
  const convertDate = date => {
    console.log(date);
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
        {data?.Temperature?.Value}
      </Text>
      <View style={{width: 64, height: 43, marginTop: 15, marginBottom: 15}}>
        <Image
          source={require(`${iconPhrase}`)}
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
