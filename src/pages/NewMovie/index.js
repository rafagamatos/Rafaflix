import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebase.js";
import styles from "./style";

export default function New({ navigation }, props) {
  const [description, setDescription] = useState(null);
  const [title, setTitle] = useState(null);  
  const [date, setDate] = useState(null);
  const [director, setDirector] = useState(null);

  function addMovie() {
    database.collection("Movies").add({
      description: description,
      title: title,      
      date: date,
      director: director,
    });
    navigation.navigate("Movie");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título: </Text>
      <TextInput
        style={styles.input}       
        onChangeText={setTitle}
        value={title}
      />     
      <Text style={styles.label}>Sobre: </Text>
      <TextInput
        style={styles.input}        
        onChangeText={setDescription}
        value={description}
      />
      <Text style={styles.label}>Lançamento: </Text>
      <TextInput
        style={styles.input}        
        onChangeText={setDate}
        value={date}
      />
      <Text style={styles.label}>Diretor: </Text>
      <TextInput
        style={styles.input}        
        onChangeText={setDirector}
        value={director}
      />

      <TouchableOpacity
        style={styles.buttonNewMovie}
        onPress={() => {
          addMovie();
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
