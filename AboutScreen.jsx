import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AboutScreen = () => {
  const handlePressName = () => {
  
  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <TouchableOpacity onPress={handlePressName}>
        <Text style={styles.name}>Harpreet Kaur</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default AboutScreen;
