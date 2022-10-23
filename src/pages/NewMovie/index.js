import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebase.js";
import styles from "./style";

export default function New({ navigation }, props) {
  const [description, setDescription] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [ano, setAno] = useState(null);

  function addMovie() {
    database.collection("Movies").add({
      description: description,
      title: titulo,
      year: ano,
    });
    navigation.navigate("Movie");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título: </Text>
      <TextInput
        style={styles.input}
        placeholder="A casa de cera"
        onChangeText={setTitulo}
        value={titulo}
      />
      <Text style={styles.label}>Ano: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 2010"
        onChangeText={setAno}
        value={ano}
      />
      <Text style={styles.label}>Descrição: </Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: O filme conta a historia de uma garota que dançava funk"
        onChangeText={setDescription}
        value={description}
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
