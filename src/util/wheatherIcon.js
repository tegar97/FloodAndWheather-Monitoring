const GenateWheatherIcon = condition => {
  console.log('kondisi', condition);
  switch (condition) {
    case 'Sunny':
      return './../assets/image/iconPhrase/1.png';
    case 'Cloudy':
      return './../assets/image/iconPhrase/2.png';
    default:
      return './../assets/image/iconPhrase/2.png';
  }
};

export default GenateWheatherIcon;
