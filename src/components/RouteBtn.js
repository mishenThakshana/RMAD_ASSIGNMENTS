import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RouteBtn = ({label, handler}) => {
  return (
    <View style={{width: '80%', marginVertical: 10}}>
      <TouchableOpacity onPress={handler}>
        <View
          style={{
            backgroundColor: '#800080',
            padding: 20,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
              {label}
            </Text>
          </View>
          <View>
            <Icon name="arrow-forward-ios" color="#fff" size={22} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RouteBtn;
