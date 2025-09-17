import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';

import { useState } from 'react';
import { supabase } from '../../src/supabaseClient';

export default function App(){

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const dados = {
    nome: nome,
    email: email,
    msg: msg
  }

  const gravar = () => {
    window.alert(dados.nome + dados.email + dados.msg );
  };

  const enviarDados = async () => {
    const {data, error } = await supabase
      .from('contatos')
      .insert([{nome: dados.nome, email: dados.email, msg: dados.msg}]);
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Fale Conosco
      </Text>

      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={setNome}
        autoFocus
      />

      <TextInput
        style={styles.input}
        placeholder='Digite seu E-mail'
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder='Digite sua mensagem'
        value={msg}
        onChangeText={setMsg}
      />

      <TouchableOpacity style={styles.botao} onPress={enviarDados} >
          Cadastrar
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input:{
    width:'90%',
    height: 45,
    backgroundColor:'#fff',
    color: '#000',
    padding:5,
    marginBottom:10
  },
  titulo:{
    height: 50,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#fff',
    marginVertical: 10

  },
  botao:{
    backgroundColor:'#246263ff',
    borderRadius:10,
    width: '80%',
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:35,
  },
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});