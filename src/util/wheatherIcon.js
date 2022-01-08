const GenateWheatherIcon = condition => {
  console.log('kondisi', condition);
  switch (condition) {
    case 'Sunny':
      return 'https://developer.accuweather.com/sites/default/files/04-s.png';
    case 'Cloudy':
      return 'https://developer.accuweather.com/sites/default/files/04-s.png';
    default:
      return 'https://developer.accuweather.com/sites/default/files/04-s.png';
  }
};

export default GenateWheatherIcon;
