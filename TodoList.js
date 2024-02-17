import React from 'react';
import { ScrollView, Pressable, View, Text, StyleSheet } from 'react-native';

function ToDoList() {
  return (
    <ScrollView style={styles.scrollView}>
      <Pressable>
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Have Breakfast</Text>
        </View>
      </Pressable>
      <Pressable>
        <View style={[styles.task]}>
          <Text style={styles.taskText}>Morning Walk</Text>
        </View>
      
      
        <View style={[styles.task, styles.completed]}>
          <Text style={styles.taskText}>Do exercise</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 20,
  },
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
