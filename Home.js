import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [todo, setTodos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    const newTodoItem = {
      id: Date.now().toString(),
      text: newTodo,
      description: description,
      done: false,
    };
    setTodos([...todo, newTodoItem]);
    setNewTodo("");
    setDescription("");
    setModalVisible(false);
  };

  const deleteTodo = (id) => {
    setTodos(todo.filter((todo) => todo.id !== id));
  };

  function updateTodo(updatedTodo) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>Add Todo</Text>
      </TouchableOpacity>

      <FlatList
        data={todo}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={item.done ? styles.doneText : null}>
              {item.done ? "" : ""}
              {item.text}
            </Text>
            {/* <TouchableOpacity
              onPress={() => deleteTodo(item.id)}
              style={styles.deleteButton}
            >
              <Text style={{ color: "white" }}>Delete</Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Details", {
                  todo: item,
                  deleteTodo,
                  updateTodo,
                })
              }
              style={styles.moreButton}
            >
              <Text style={{ color: "black" }}>More</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>New Todo</Text>
            <TextInput
              style={styles.input}
              placeholder="Write todo here"
              value={newTodo}
              onChangeText={setNewTodo}
              autoFocus
            />
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Description</Text>
            <TextInput
              style={styles.textArea}
              placeholder="Write a description"
              value={description}
              onChangeText={setDescription}
              multiline={true}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.buttonCancel}
              >
                <Text style={{ color: "black" }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addTodo} style={styles.buttonAdd}>
                <Text style={{ color: "black" }}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  addButton: {
    backgroundColor: "#E2FF53",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 10,
    width: 150,
    alignSelf: "center",
    borderColor:"black",
    borderWidth: 1,
  },
  addButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  
  moreButton: {
    backgroundColor: "#8AFD1F",
    padding: 10,
    borderRadius: 20,
    margin: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#ECD5FF",
    borderRadius: 20,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 20,
    padding: 10,
    margin: 4,
    width: 340,
    backgroundColor: "white"
  },
  buttonAdd: {
    backgroundColor: "#E2FF53",
    padding: 10,
    borderRadius: 20,
    minWidth: 70,
    alignItems: "center",
  },
  buttonCancel: {
    backgroundColor: "#FF86EB",
    padding: 10,
    borderRadius: 20,
    minWidth: 70,
    alignItems: "center",
  },
  textArea: {
    height: 100,
    borderColor: "#aaa",
    borderWidth: 1,
    padding: 5,
    textAlignVertical: "top",
    borderRadius: 15,
    width: 340,
        backgroundColor: "white"

  },
  doneText: {
    textDecorationLine: "line-through",
    color: "gray",
  },
});
