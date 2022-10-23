import { Text, StyleSheet, View } from "react-native";

export default function CardDetails({ feature }) {
  return (
    <View style={styles.containerOption}>
      <View>
        <Text>Icon</Text>
      </View>
      <Text>{feature}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOption: {
    flexDirection: 'column',
    backgroundColor: 
  },
});
