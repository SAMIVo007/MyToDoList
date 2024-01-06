import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal, Pressable } from 'react-native';
import { useState } from 'react';


export default function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");

  function textInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    if (enteredTaskText != "") {
      props.onAddTask(enteredTaskText);
    }
    setEnteredTaskText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View style={styles.inputContainer}>
        <View style={{ flexDirection: "row", marginTop: 23, marginBottom: 16, alignItems:"center" }}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your task here"
            onChangeText={textInputHandler}
            value={enteredTaskText}
          />
          <Button title="Add Task" onPress={addTaskHandler} />
        </View>
        <Pressable
          style={styles.button}
          onPress={props.collapse}
        >
          <Text style={{ fontSize: 38, color:"white" }}>×</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#cccccc",
    width: "70%",
    margin: 5,
    padding: 8,
    paddingLeft: 12,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 680,
    paddingHorizontal: 8,
    backgroundColor: "white",
    paddingTop: 2,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 3.5,
    shadowRadius: 60,
    elevation: 10,  
  },

  button: {
    borderRadius: 50, // Assuming a button width and height of 100
    padding: 0,
    elevation: 2,
    backgroundColor: "#0e7afe",
    width: 50, 
    height: 50,
    alignItems: "center",
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});