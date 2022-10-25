import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native";


export default function NovoUsuario({ navigation }) {
  return (
   <View style={styles.container}>
    <Text> Email: </Text>
    <TextInput placeholder="email"/>
    <Text> Senha: </Text>
    <TextInput placeholder="senha"/>
   </View>
      
  );
}
