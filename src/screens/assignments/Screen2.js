import {View, Text, SafeAreaView} from 'react-native';

const Screen2 = ({route}) => {
  const {username, email} = route.params;
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000', fontSize: 18}}>Username: {username}</Text>
      <Text style={{color: '#000', fontSize: 18}}>Email: {email}</Text>
    </SafeAreaView>
  );
};

export default Screen2;
