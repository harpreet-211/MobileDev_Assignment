import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List App</Text>

      
      <View style={styles.todoContainer}>
        <View><Text style={styles.todoText}>Wake Up Early in the Morning</Text></View>
        <View><Text style={styles.todoText}>Have Coffee</Text></View>
        <View><Text style={styles.todoText}>Exercise</Text></View>
      </View>

      <Image
        source={{ uri: 'https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg' }}
        style={styles.image}
        resizeMode="cover"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  todoContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
  },
  todoText: {
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginTop: 20,
  },
});
