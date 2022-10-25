import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#303030",
    paddingTop: 100,
  },
  stretch: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
  },
  logo: {   
    justifyContent: "center",
    alignItems: "center",
  },
  gradiente: {   
    flex: 1,  
    justifyContent: 'center',
    alignItems: 'center',    

  },
});

export default styles;
