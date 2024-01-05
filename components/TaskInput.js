import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal } from 'react-native';
import { useState } from 'react';


export default function TaskInput(props) {

  const [enteredTaskText, setEnteredTaskText] = useState('');

  function textInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  }

  function addTaskHandler() {
    if (enteredTaskText != '') {
      props.onAddTask(enteredTaskText);
    }
    setEnteredTaskText('');
  }

    return (
      <Modal 
        style={styles.modal} 
        animationType="slide"
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your task here"
            onChangeText={textInputHandler}
            value={enteredTaskText}
          />

          <Button title="Add Task" onPress={addTaskHandler} />
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 680,
  },

  modal: {
    backgroundColor: "blue"
  },
});