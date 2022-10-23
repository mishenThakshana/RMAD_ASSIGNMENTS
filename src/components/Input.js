import {View, Text, TextInput} from 'react-native';

const Input = ({handler, value, placeholder}) => {
  return (
    <View style={{width: '80%', marginVertical: 5}}>
      <TextInput
        onChangeText={handler}
        style={{
          padding: 10,
          borderWidth: 1,
          borderColor: '#A9A9A9',
          borderRadius: 5,
          color: '#000',
        }}
        placeholder={placeholder}
        placeholderTextColor="#A9A9A9"
        value={value}
      />
    </View>
  );
};

export default Input;
