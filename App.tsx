import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput,} from 'react-native';

export default function App() {
  const logo = require('./assets/logo.png')

  const [num, setNum] = useState('');
  const [resultado, setResultado] = useState('');
  const [vencedor, setVencedor] = useState('');
  const [parimpar, setParImpar] = useState('');

  function jogar(){
    let sorteio = Math.floor(Math.random() * 10 + 1);
    let final = sorteio.toString()
    let valFinal = parseInt(num + sorteio)
    if(valFinal % 2 == 0){
      if(parimpar == "par"){
        setVencedor('Você Venceu!!')
      }else{
        setVencedor('Você Perdeu!!')
      }
    }
    if(valFinal % 2 != 0){
      if(parimpar == "impar"){
        setVencedor('Você Venceu!!')
      }else{
        setVencedor('Você Perdeu!!')
      }
    }
    
    setResultado(final)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo de Par ou Ímpar</Text>
      <Image source={logo} style={styles.logo}/>
      <View style={styles.container2}>
        <TouchableOpacity style={styles.button} onPress={() => setParImpar('par')}>
          <Text style={styles.buttonText}>Par</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setParImpar('impar')}>
          <Text style={styles.buttonText}>Impar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.sorteado}>o resultado foi: {num} + {resultado} = {parseInt(num) + parseInt(resultado)}</Text>
        <Text style={styles.text}>{vencedor}</Text>
        <TouchableOpacity style={styles.button} onPress={jogar}>
          <Text style={styles.buttonText}>Jogar</Text>
        </TouchableOpacity>
        <TextInput style={styles.entrada} 
          placeholder='Digite um número'
          keyboardType='numeric'
          maxLength={1}
          onChangeText={setNum}
          value={num}>
        </TextInput>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#390a75',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  container2: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 30,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  titulo: {
    fontSize: 25,
    marginTop: 40,
    marginBottom: 20,
    color: 'white',
  },
  logo: {
    width: 100,
    height: 100,
  },
  sorteado: {
    margin: 40,
    fontSize: 20,
    color: 'white',
  },
  entrada: {
    fontSize: 30,
    marginBottom: 50,
    borderWidth: 2,
    borderRadius: 20,
    width: 300,
    backgroundColor: 'lightgray',
  },
});
