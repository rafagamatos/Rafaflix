import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

export default function CardOption({ titleText, callback, icon }) {
  return (
    <TouchableOpacity onPress={callback}>
      <View style={styles.containerOption}>
        <View style={styles.icon}>{icon}</View>
        <Text style={styles.optionTitle}>{titleText}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerOption: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "8A8A8A",
    width: 300,
    height: 100,
    borderRadius: 10,
    margin: 20,
    borderWidth: 3,
    borderColor: "#fff",
  },
  icon: {
    width: 50,
    height: 50,
    backgroundColor: "#e50914",
    marginLeft: 50,
    marginRight: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#F92E6A",
  },
});
