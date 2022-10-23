import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303030",
    paddingTop: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  Movies: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  deleteMovie: {
    justifyContent: "center",
    paddingRight: 15,
  },
  DescriptionMovie: {
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 5,
    marginLeft: 20,
    color: "#282b2db5",
  },
  buttonNewMovie: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 20,
    backgroundColor: "#F92e6a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default styles;
