import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import { StatusBar } from "expo-status-bar";
import TaskItems from './components/TaskItems';
import TaskInput from './components/TaskInput';

export default function App() {

  const [tasks, setTasks] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

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

  function modalVisibilityHandler(params) {
    if(modalVisibility == false){
      setModalVisibility(true);
    }
    else setModalVisibility(false);
  }

  return (
    <View style={styles.appContainer}>
      
      <TaskInput visible={modalVisibility} collapse={modalVisibilityHandler} onAddTask={addTaskHandler} />
      
      <View style={styles.tasksContainer}>

        <Text style={styles.heading}>My Tasks</Text>
        
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

        <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', marginBottom:38 }}>
          <TouchableHighlight
            style={styles.button}
            onPress={modalVisibilityHandler}
          >
          <Text style={{fontSize:20, color:"white", padding:12 }}>Add New Task</Text>
        </TouchableHighlight> 
        </View>

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

  heading: {
    margin: 8,
    padding: 3,
    fontSize: 35,
    fontWeight: "600",
    fontFamily:"Bodoni 72"
  },

  button: {
    borderRadius: 50, // Assuming a button width and height of 100
    padding: 0,
    elevation: 20,
    backgroundColor: "#0e7afe",
    borderWidth:1,
    borderColor: "#0a51a7",
    width: 200, 
    height: 50,
    alignItems: "center",
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 20,
  },

});