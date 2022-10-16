import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';

const Assignment = () => {
  React.useEffect(() => {
    functionOne();
  }, []);

  const functionOne = () => {
    const name = 'Apple';
    // If CONDITIONS
    if (name === 'BlueBerry') {
      console.log('Fruit 1', name);
    } else if (name === 'Orange') {
      console.log('Fruit 2', name);
    } else {
      console.log('Fruit 3', 'Not Available');
    }

    //My Answer
    const marks = 75;

    if (marks >= 75) {
      console.log('A');
    } else if (marks >= 65) {
      console.log('B');
    } else if (marks >= 55) {
      console.log('c');
    } else if (marks >= 35) {
      console.log('S');
    } else {
      console.log('W');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lesson 01</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
  },
});

export default Assignment;
