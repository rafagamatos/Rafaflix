import React, {useEffect, useState} from "react";
import { View, Text, Image, KeyboardAvoidingView, Button, TouchableOpacity } from "react-native";
import styles from "./styles";
import TitlePage from  '../../components/TitlePage'
import { TextInput } from "react-native";
import database from "../../config/firebase";


export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [loginError, setLoginError] = useState('')

  const login = () => {
    database.auth().createUserWithEmailAndPassword(email, senha)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
   // navigation.navigate('Home' , {idUser: user.uid})
  })
  .catch((error) => {
    setLoginError(true)
    let errorCode = error.code;
    let errorMessage = error.message;
    // ..
  });
  }

  useEffect(() => {

  },[])

  return (
   <KeyboardAvoidingView  
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
        {loginError === true 
        ? 
        <View>
          Senha ou Email inválidos ne amore
        </View>
        : 
        <View />
        }        
       
      </View>
      {email === '' || senha === ''
        ?
        <TouchableOpacity 
         disabled={true}
         style={styles.button}
        >
           <Text>Entrar</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity      
        style={styles.button}
        onPress={()=> {
          navigation.navigate('Home')
        }}
       >
        <Text>Entrar</Text>
       </TouchableOpacity>
        }  
        <Text style={{fontSize: 15, color: '#b8b8b8'}}>Não possui cadastro?  
          <Text 
          onPress={() => {
            navigation.navigate('NovoUsuario')
          }} 
          style={{fontSize: 15, color: '#0d99ff', marginLeft: 10}}> 
            Cadastre agora.       
          </Text>
        </Text>
   </KeyboardAvoidingView>
      
  );
}
