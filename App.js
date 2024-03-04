import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (!tasks.includes(task) && task.trim() !== '') {
      setTasks([...tasks, task]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>
      <ToDoForm addTask={addTask} />
      {/* Display tasks */}
      <ScrollView style={styles.taskList}>
        {tasks.map((task, index) => (
          <Text key={index}>{task}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskList: {
    marginTop: 10,
  },
});
