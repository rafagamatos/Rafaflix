import React, {useEffect, useState} from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import TitlePage from  '../../components/TitlePage'
import { TextInput } from "react-native";
import firebase from '../../config/firebase'


export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loginError, setLoginError] = useState('')

  const login = () => {

  }

  useEffect(() => {

  },[])

  return (
   <KeyboardAvoidingView
   behavior={Platform.OS === "ios" ? "padding" : "height"}
   style={styles.container}>
    <View style={styles.logo}>
      <Image source={require('../../../assets/logo.png')} style={styles.stretch}/>
      <TitlePage title={"Rafaflix"} />
      </View>
      <View>
        <Text style={styles.loginLabel}>Email:</Text>
        <TextInput placeholder="Digite seu email ai amore"
          type='text'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <Text style={styles.loginLabel}>Senha:</Text>
        <TextInput placeholder="Digite sua senha ai amore"
          secureTextEntry={true}
          type='text'
          value={senha}
          onChangeText={(text) => setSenha(text)}
          style={styles.input}
        />
        {loginError === true ? 
        <View>Senha ou Email inválidos ne amore</View>
        : 
        <View></View>
        }
        <View/>
      </View>
   </KeyboardAvoidingView>
      
  );
}
