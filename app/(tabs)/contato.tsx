import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { useState } from 'react';

export default function App(){

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [msg, setMsg] = useState('');

  const dados = {
    nome: nome,
    idade: Number(idade),
    msg: msg
  }

  const gravar = () => {
    window.alert(dados.nome + ' - ' + dados.idade + ' - ' + dados.msg);
  };

  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Fale Conosco</Text>

      <TextInput
        style={styles.input}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={setNome}
        autoFocus
      />
      
      <TextInput
        style={styles.input}
        placeholder='Digite sua idade'
        value={idade}
        onChangeText={setIdade}
        autoFocus
      />
      
      <TextInput
        style={styles.input}
        placeholder='Deixe sua mensagem'
        value={msg}
        onChangeText={setMsg}
        autoFocus
      />
      <TouchableOpacity style={styles.botao} onPress={gravar}> 
        Cadastrar
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input:{
    width: '90%',
    height: 45,
    backgroundColor: '#fff',
    color: '#000',
    padding: 5,
    marginBottom: 10,
    borderRadius: 15
  },
  titulo:{
    textAlign: 'center',
    marginVertical: 10
  },
  botao:{
    width: 100,
    height:  30,
    backgroundColor: 'green',
    color:'white',
    borderRadius: 15,
    borderColor:'blue',
    borderStyle: 'solid',
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})