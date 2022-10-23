import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function RegisterPet() {
  return (
    <>
      <TouchableOpacity>
        <View style={styles.addButton}>
          <Text style={styles.petRegister}>+</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.petRegister}>Cadastre seu pet</Text>
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: "#612392",
  },
  petRegister: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFBB55",
  },
});
