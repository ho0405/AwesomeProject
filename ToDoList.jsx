// ToDoList.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  taskContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
