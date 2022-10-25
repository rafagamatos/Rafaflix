import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebase";
import styles from "./style";

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
  const [titleEdit, setTitleEdit] = useState(route.params.title);  
  const [dateEdit, setDateEdit] = useState(route.params.date);  
  const [directorEdit, setDirectorEdit] = useState(route.params.director);  

  const idMovie = route.params.id;
 


  function editMovie(description, id, title, director, date) {
    database.collection("Movies").doc(id).update({
      description: description,
      title: title,
      director: director,  
      date: date    
    });
    navigation.navigate("Movie");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titulo:</Text>
      <TextInput
        style={styles.input}       
        onChangeText={setTitleEdit}
        value={titleEdit}
      />
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}       
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <Text style={styles.label}>Data:</Text>
      <TextInput
        style={styles.input}       
        onChangeText={setDateEdit}
        value={dateEdit}
      />
      <Text style={styles.label}>director:</Text>
      <TextInput
        style={styles.input}       
        onChangeText={setDirectorEdit}
        value={directorEdit}
      />
      
  
      
    
      <TouchableOpacity
        style={styles.buttonSave}
        onPress={() => {
          editMovie(descriptionEdit, idMovie, titleEdit, directorEdit, dateEdit);
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
