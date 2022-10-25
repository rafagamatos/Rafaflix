import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import database from "../../config/firebase";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";


export default function Movie({ navigation }) {
  const [movie, setMovie] = useState([]);

  function deleteMovie(id) {
    database.collection("Movies").doc(id).delete();
  }

  useEffect(() => {
    database.collection("Movies").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setMovie(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movie}
        renderItem={({ item }) => {
          return (
            <View style={styles.Movies}>
              <Text
                style={styles.DescriptionMovie}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                    title: item.title,
                    date: item.date,
                    director: item.director,                   
                  })
                }
              >
                {item.title}
              </Text>
              <TouchableOpacity
                style={styles.deleteMovie}
                onPress={() => {
                  deleteMovie(item.id);
                }}
              >
                <FontAwesome
                  name="trash"
                  size={25}
                  color="#F92e6A"
                ></FontAwesome>
              </TouchableOpacity>
             
            </View>
          );
        }}
      />
              <TouchableOpacity
                style={styles.buttonNewMovie}
                onPress={() => {
                 navigation.navigate('New')
                }}
              >
                <Text style={styles.iconButton}>+</Text>
              </TouchableOpacity>
    </View>
  );
}
