import {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

let listData = [
  {
    id: 1,
    title: 'Banana',
  },
  {
    id: 2,
    title: 'Apple',
  },
  {
    id: 3,
    title: 'Orange',
  },
  {
    id: 4,
    title: 'Pine Apple',
  },
];

const FlatListComponent = () => {
  const [clickedItem, setClickedItem] = useState('');

  const handleClickedItem = id => {
    setClickedItem(id);
    let foundData = listData.find(data => data.id === id);
    let indexOfData = listData.indexOf(foundData);
    listData.splice(indexOfData, 1);
    listData = [...listData];
  };

  const FruitItem = ({item}) => (
    <TouchableOpacity
      style={[styles.item, item.id === clickedItem && {backgroundColor: 'red'}]}
      onPress={() => handleClickedItem(item.id)}>
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.id}</Text>
        <View style={{padding: 10}} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={listData}
        renderItem={({item}) => <FruitItem item={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

    // ==================

    elevation: 9, // for android

    //for ios
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    borderRadius: 8,
    //
  },
  title: {
    fontSize: 32,
    color: '#000',
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
  },
});

export default FlatListComponent;
