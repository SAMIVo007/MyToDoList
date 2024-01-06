import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Pressable, TouchableOpacity } from 'react-native';


export default function TaskItems(props) {
    return (
      // <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      //     <Text style={styles.taskList}> {props.numbering}. {props.text} </Text>
      // </Pressable>

      <TouchableOpacity onPress={props.onDeleteItem.bind(this, props.id)}>
        <Text style={styles.taskList}>
          {props.numbering}. {props.text}
        </Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({  
    taskList: {
      backgroundColor: '#008cff',
      color: 'white',
      padding: 5,
      borderRadius: 8,
      margin: 3,
      overflow: 'hidden'
    }
  });