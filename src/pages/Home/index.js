import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import TitlePage from "../../components/TitlePage";
import CardOption from "../../components/cardOption";
import styles from "./styles";


export default function Home({ navigation }) {
  return (
    <LinearGradient colors={['#282828', '#500808']} style={styles.gradiente}>       
      <View style={styles.logo}>
      <Image source={require('../../../assets/logo.png')} style={styles.stretch}/>
      <TitlePage title={"Rafaflix"} />
      </View>
        <CardOption
          titleText={"Meus filmes"}
          callback={() => navigation.navigate("Movie")}
          icon={
            <Text>
              <FontAwesome name="list" size={25} color="#303030"></FontAwesome>
            </Text>
          }
        />
        <CardOption
          titleText={"Adicionar"}
          callback={() => navigation.navigate("New")}
          icon={
            <Text>
              <FontAwesome name="plus" size={25} color="#303030"></FontAwesome>
            </Text>
          }
        />     
     </LinearGradient>
  );
}
