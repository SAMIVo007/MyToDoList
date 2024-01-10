// import { useState, useRef, useCallback } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   TextInput,
//   ScrollView,
//   FlatList,
//   Pressable,
//   TouchableOpacity,
//   TouchableHighlight,
//   KeyboardAvoidingView,
//   Modal,
// } from "react-native";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import { useMemo } from "react";
// import BottomSheet, { BottomSheetTextInput } from "@gorhom/bottom-sheet";
// import {
//   BottomSheetModal,
//   BottomSheetModalProvider,
// } from "@gorhom/bottom-sheet";

// export default function TaskInput(props) {
//   const [enteredTaskText, setEnteredTaskText] = useState("");

//   function textInputHandler(enteredText) {
//     setEnteredTaskText(enteredText);
//   }

//   function addTaskHandler() {
//     if (enteredTaskText != "") {
//       props.onAddTask(enteredTaskText);
//     }
//     setEnteredTaskText("");
//   }

//   return (
//     <Modal visible={props.visible} animationType="slide" transparent={true}>
//       <Pressable
//         style={styles.backgroundTouch}
//         onPress={props.collapse}
//       ></Pressable>
//       <View style={styles.inputContainer}>
//         <View
//           style={{
//             flexDirection: "row",
//             marginTop: 23,
//             marginBottom: 16,
//             alignItems: "center",
//           }}
//         >
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter your task here"
//             onChangeText={textInputHandler}
//             value={enteredTaskText}
//             autoFocus={true}
//           />

//           <TouchableOpacity
//             onPress={addTaskHandler}
//             style={{
//               backgroundColor: "#107bff",
//               borderRadius: 23,
//               padding: 7,
//               marginLeft: 2,
//               elevation: 4,
//             }}
//             activeOpacity={0.8}
//           >
//             <Text style={{ color: "white", fontSize: 16 }}> Add Task </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// }

// const styles = StyleSheet.create({
//   textInput: {
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: "#cccccc",
//     width: "70%",
//     margin: 5,
//     padding: 8,
//     paddingLeft: 12,
//     backgroundColor: "white",
//   },

//   inputContainer: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     marginTop: 0,
//     paddingHorizontal: 8,
//     backgroundColor: "#97bff0",
//     paddingTop: 2,
//     // borderRadius: 30,
//     borderTopRightRadius: 30,
//     borderTopLeftRadius: 30,
//     shadowColor: "#000000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 3.5,
//     shadowRadius: 10,
//     elevation: 40,
//   },

//   backgroundTouch: {
//     // borderRadius: 50,
//     backfaceVisibility: "visible",
//     paddingBottom: 0,
//     elevation: 20,
//     width: 550,
//     height: 410,
//     alignItems: "center",
//     // backgroundColor:"blue"
//   },
// });

import React, { useState, useEffect, useRef } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  StyleSheet,
} from "react-native";

export default function TaskInput(props) {
  const [enteredTaskText, setEnteredTaskText] = useState("");
  const textInputRef = useRef(null);

  useEffect(() => {
    if (props.visible) {
      // Focus the input when the modal becomes visible
      textInputRef.current.focus();
    }
  }, [props.visible]);

  const textInputHandler = (text) => {
    setEnteredTaskText(text);
  };

  const addTaskHandler = () => {
    if (enteredTaskText.trim().length > 0) {
      props.onAddTask(enteredTaskText);
      setEnteredTaskText("");
      props.collapse();
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <Pressable
        style={styles.backgroundTouch}
        onPress={props.collapse}
      ></Pressable>
      <View style={styles.inputContainer}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 23,
            marginBottom: 16,
            alignItems: "center",
          }}
        >
          <TextInput
            ref={textInputRef}
            style={styles.textInput}
            placeholder="Enter your task here"
            onChangeText={textInputHandler}
            value={enteredTaskText}
          />

          <TouchableOpacity
            onPress={addTaskHandler}
            style={{
              backgroundColor: "#107bff",
              borderRadius: 23,
              padding: 7,
              marginLeft: 2,
              elevation: 4,
            }}
            activeOpacity={0.8}
          >
            <Text style={{ color: "white", fontSize: 16 }}> Add Task </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backgroundTouch: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "lightgrey",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 20,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
    fontSize: 16,
  },
});
