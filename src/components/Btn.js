import {View, Text, TouchableOpacity} from 'react-native';

const Btn = ({handler, label}) => {
  return (
    <View style={{width: '80%', marginVertical: 10}}>
      <TouchableOpacity onPress={handler}>
        <View
          style={{
            backgroundColor: '#800080',
            padding: 15,
            borderRadius: 5,
            alignItems: 'center',
          }}>
          <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
            {label}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
