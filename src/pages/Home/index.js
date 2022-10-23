import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import TitlePage from "../../components/TitlePage";
import CardOption from "../../components/cards/cardOption";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TitlePage title={"Rafaflix"} />
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
    </View>
  );
}
