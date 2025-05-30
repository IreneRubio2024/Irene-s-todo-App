import { useRoute, useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "@react-navigation/elements";

export default function DetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { todo, deleteTodo, updateTodo } = route.params;

  const handleDelete = () => {
    deleteTodo(todo.id);
    navigation.goBack();
  };

  const handleIsDone = () => {
    updateTodo({ ...todo, done: true });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <View style={styles.textBox}>
        <Text style={styles.text}>{todo.text}</Text>
      </View>

      <Text style={styles.label}>Description:</Text>
      <View style={styles.textBox}>
        <Text style={styles.text}>{todo.description}</Text>
      </View>

      <View style={styles.topButtons}>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleIsDone} style={styles.doneButton}>
          <Text  style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.goBackButton}>
        <Button title="Go back" onPress={() => navigation.goBack()}>
          Go back
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    alignSelf: "flex-start",
  },
  textBox: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 20,
    padding: 10,
    marginTop: 5,
    width: "100%",
    backgroundColor: "#f9f9f9",
  },
  text: {
    fontSize: 14,
  },

  topButtons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 20,
  },

  goBackButton: {
    alignSelf: "flex-end",
    borderRadius: 20,
    marginTop: 450,
    marginRight: 10,
    borderColor:"black",
    borderWidth: 1,
    
  },

  deleteButton: {
    backgroundColor: "#FF86EB",
    padding: 10,
    borderRadius: 20,
    
  },

  doneButton: {
    backgroundColor: "#8AFD1F",
    padding: 10,
    borderRadius: 20,
   
  },

  buttonText: {
    color: "black",
  
  },
});
