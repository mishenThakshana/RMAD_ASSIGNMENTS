import {View, Text} from 'react-native';

const ScreenTitle = ({title}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={{color: '#000', fontSize: 22, fontWeight: 'bold'}}>
        {title}
      </Text>
    </View>
  );
};

export default ScreenTitle;
