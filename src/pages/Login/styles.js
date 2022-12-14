import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {   
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginBottom: 20,
  },
  stretch: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
  },
  loginLabel: {
    fontSize: 20,
    fontWeight: '500',
    color: '#eb1e32',
    marginBottom: 10,
    marginTop: 20,
    letterSpacing: 2,
  },
  input: {
    backgroundColor: '#fff',
    width: 280,
    height: 40,
    borderRadius: 10
  }, 
  button: {
    width: 100,
    height: 40,
    backgroundColor: 'red',
    margin: 20,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  }

});

export default styles;
