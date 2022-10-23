import { Text, StyleSheet } from "react-native";

export default function TitlePage({ title }) {
  return (
    <>
      <Text style={styles.textTitle}>{title}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    paddingBottom: 30,
  },
});
