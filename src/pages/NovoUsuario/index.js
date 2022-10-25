import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native";
import TitlePage from "../../components/TitlePage";


export default function NovoUsuario({ navigation }) {
  return (
   <View style={styles.container}>
    <TitlePage title={'Cadastro'}/>
    <Text> Email: </Text>
    <TextInput placeholder="email" style={styles.inputForm}/>
    <Text> Senha: </Text>
    <TextInput placeholder="senha" style={styles.inputForm}/>
   </View>
      
  );
}
