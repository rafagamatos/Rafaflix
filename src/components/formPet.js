import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function FormPet() {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>Nome: </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.labelText}>Idade: </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.labelText}>Tipo: </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.labelText}>Raça: </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.labelText}>Peso: </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.labelText}>Altura: </Text>
      <TextInput style={styles.input}></TextInput>
      <Text style={styles.labelText}>Cor: </Text>
      <TextInput style={styles.input}></TextInput>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  input: {
    height: 30,
    borderWidth: 1,
    width: "100%",
    marginBottom: 10,
  },
  labelText: {
    fontSize: 20,
    fontWeight: "500",
  },
  buttonContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#FFBB55",
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
