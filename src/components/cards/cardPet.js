import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function CardPet({ name, animalType, age, gender }) {
  return (
    <TouchableOpacity>
      <View style={styles.containerOption}>
        <View style={styles.icon}></View>
        <View style={styles.petData}>
          <Text style={styles.namePet}>{name}</Text>
          <Text>{animalType}</Text>
          <Text>{age} anos</Text>
          <Text>{gender}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerOption: {
    flexDirection: "row",
    backgroundColor: "#FFBB55",
    width: 322,
    height: 147,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 20,
  },
  icon: {
    width: 90,
    height: 90,
    backgroundColor: "#fff",
    borderRadius: 50,
    marginLeft: 40,
    marginRight: 20,
  },
  namePet: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#fff",
  },
  petData: {
    width: 130,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
