import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { StatusBar } from "expo-status-bar";
import TaskItems from './components/TaskItems';
import TaskInput from './components/TaskInput';

export default function App() {

  const [tasks, setTasks] = useState([]);

  function addTaskHandler(enteredTaskText) {
    // console.log(enteredTaskText);
    // setTasks([...tasks, enteredTaskText]);   NOT RECOMMENDED!
    setTasks(currentTasks => [...currentTasks, {text: enteredTaskText, id: Math.random().toString()}]);
  }

  function deleteTaskHandler(id) {
    setTasks(currentTasks => {
      return currentTasks.filter((items) => items.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      
        <TaskInput onAddTask={addTaskHandler} />
      

      <View style={styles.tasksContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={(itemData) => {
            return (
              <TaskItems
                text={itemData.item.text}
                numbering={itemData.index + 1}
                id={itemData.item.id}
                onDeleteItem={deleteTaskHandler}
              />
            );
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 16
  },
  
  tasksContainer: {
    flex: 7
  },

});