import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import database from "../../config/firebase";
import styles from "./style";

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  );
  const [tituloEdit, setTituloEdit] = useState(route.params.title);
  const [anoEdit, setAnoEdit] = useState(route.params.year);

  const idMovie = route.params.id;

  function editTask(description, id, title, year) {
    database.collection("Movies").doc(id).update({
      description: description,
      title: title,
      year: year,
    });
    navigation.navigate("Movie");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Titulo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setTituloEdit}
        value={tituloEdit}
      />
      <Text style={styles.label}>Descrição:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <Text style={styles.label}>Ano: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: estudar javascript"
        onChangeText={setAnoEdit}
        value={anoEdit}
      />
      <TouchableOpacity
        style={styles.buttonNewMovie}
        onPress={() => {
          editTask(descriptionEdit, idMovie);
        }}
      >
        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
