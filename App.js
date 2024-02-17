import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './TodoList';


function App() {
  return (
    <SafeAreaView style={styles.container}>
  
      <ToDoForm />
      <ToDoList />
    </SafeAreaView>
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
});

export default App;
