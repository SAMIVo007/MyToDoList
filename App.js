import { useState, useRef, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
  KeyboardAvoidingView,
  Modal,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import TaskItems from "./components/TaskItems";
import TaskInput from "./components/TaskInput";
import BottomSheet from "@gorhom/bottom-sheet";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  function addTaskHandler(enteredTaskText) {
    // console.log(enteredTaskText);
    // setTasks([...tasks, enteredTaskText]);   NOT RECOMMENDED!
    setTasks((currentTasks) => [
      ...currentTasks,
      { text: enteredTaskText, id: Math.random().toString() },
    ]);
  }

  function deleteTaskHandler(id) {
    setTasks((currentTasks) => {
      return currentTasks.filter((items) => items.id !== id);
    });
  }

  function modalVisibilityHandler(params) {
    if (modalVisibility == false) {
      setModalVisibility(true);
    } else setModalVisibility(false);
  }

  const [visible, setVisible] = useState(false);
  const toggleBottomSheet = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.appContainer}>
      <TaskInput
        visible={modalVisibility}
        collapse={modalVisibilityHandler}
        onAddTask={addTaskHandler}
      />

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

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
            marginBottom: 0,
            backfaceVisibility: "visible",
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={modalVisibilityHandler}
            activeOpacity={0.8}
          >
            <Text
              style={{
                fontSize: 20,
                color: "white",
                padding: 12,
                paddingTop: 10,
              }}
            >
              Add New Task
            </Text>
          </TouchableOpacity>
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
    paddingHorizontal: 16,
  },

  tasksContainer: {
    flex: 1,
  },

  heading: {
    margin: 8,
    padding: 3,
    fontSize: 35,
    fontWeight: "600",
  },

  button: {
    borderRadius: 50, // Assuming a button width and height of 100
    padding: 0,
    elevation: 20,
    backgroundColor: "#0d54ac",
    borderWidth: 1,
    borderColor: "#0a51a7",
    width: 200,
    height: 50,
    alignItems: "center",
    marginBottom: 28,
  },
});
